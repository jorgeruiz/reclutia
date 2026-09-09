#!/usr/bin/env bash
# verify-design.sh — Reclutia design token verification
# Checks tokens.css consistency, hex compliance, contrast ratios, and motion budget.
set -euo pipefail
VIOLATIONS=0
WARNINGS=0

# ---------------------------------------------------------------------------
# Allowed hex values - parsed from tokens.css + documented exceptions
# ---------------------------------------------------------------------------
ALLOWED_HEX=()

# Parse hex values from tokens.css automatically
if [ -f "tokens.css" ]; then
  while IFS= read -r HEX_VAL; do
    UPPER=$(echo "$HEX_VAL" | tr '[:lower:]' '[:upper:]')
    LOWER=$(echo "$HEX_VAL" | tr '[:upper:]' '[:lower:]')
    ALLOWED_HEX+=("$UPPER" "$LOWER")
  done < <(grep -oE '#[0-9a-fA-F]{6}' tokens.css | sort -u)
fi

# Documented exceptions (not in tokens.css, used in special sections):
# #94A3BB - muted text on navy background in headhunting + footer sections (see DESIGN.md)
# #1E3A5F - subtle border on navy background in footer (see DESIGN.md)
ALLOWED_HEX+=("#94A3BB" "#94a3bb" "#1E3A5F" "#1e3a5f")

fail() { echo "FAIL: $1"; VIOLATIONS=$((VIOLATIONS + 1)); }
warn() { echo "WARN: $1"; WARNINGS=$((WARNINGS + 1)); }
pass() { echo "PASS: $1"; }

# ---------------------------------------------------------------------------
# 1. tokens.css exists and has @theme block with initial resets
# ---------------------------------------------------------------------------
echo "=== 1. tokens.css structure ==="
if [ ! -f "tokens.css" ]; then
  fail "tokens.css not found"
else
  for RESET in "color-" "radius-" "font-" "shadow-"; do
    if ! grep -q "${RESET}\*: initial" tokens.css; then
      fail "tokens.css missing reset: --${RESET}*: initial"
    fi
  done
  pass "tokens.css exists with initial resets"
fi

# ---------------------------------------------------------------------------
# 2. No hex colors outside allowed set in source files
# ---------------------------------------------------------------------------
echo ""
echo "=== 2. Hex color compliance ==="
SEARCH_DIRS=""
for DIR in src app components; do
  [ -d "$DIR" ] && SEARCH_DIRS="$SEARCH_DIRS $DIR"
done

if [ -n "$SEARCH_DIRS" ]; then
  HEX_HITS=$(grep -rn --include='*.tsx' --include='*.ts' --include='*.css' \
    -oE '#[0-9a-fA-F]{6}\b' $SEARCH_DIRS 2>/dev/null \
    | grep -v 'node_modules' | grep -v 'tokens.css' | grep -v 'globals.css' \
    | grep -v '.test.' || true)

  if [ -n "$HEX_HITS" ]; then
    while IFS= read -r LINE; do
      HEX=$(echo "$LINE" | grep -oE '#[0-9a-fA-F]{6}')
      FOUND=0
      for ALLOWED in "${ALLOWED_HEX[@]}"; do
        HEX_LOWER=$(echo "$HEX" | tr '[:upper:]' '[:lower:]')
        ALLOWED_LOWER=$(echo "$ALLOWED" | tr '[:upper:]' '[:lower:]')
        if [ "$HEX_LOWER" = "$ALLOWED_LOWER" ]; then
          FOUND=1
          break
        fi
      done
      if [ "$FOUND" -eq 0 ]; then
        fail "Unapproved hex $HEX in $LINE"
      fi
    done <<< "$HEX_HITS"
  fi
  pass "Hex color scan complete"
else
  warn "No src/app/components dirs found yet - skipping hex scan"
fi

# ---------------------------------------------------------------------------
# 3. No Tailwind default color/radius/shadow classes
# ---------------------------------------------------------------------------
echo ""
echo "=== 3. Tailwind default classes ==="
if [ -n "$SEARCH_DIRS" ]; then
  # Default color classes
  DEFAULTS=$(grep -rn --include='*.tsx' --include='*.ts' \
    -E '(bg|text|border|ring|outline)-(red|blue|green|yellow|purple|pink|indigo|gray|slate|zinc|neutral|stone|orange|amber|lime|emerald|teal|cyan|sky|violet|fuchsia|rose)-[0-9]' \
    $SEARCH_DIRS 2>/dev/null \
    | grep -v 'node_modules' | grep -v '.test.' || true)
  if [ -n "$DEFAULTS" ]; then
    fail "Tailwind default color classes found:"
    echo "$DEFAULTS"
  else
    pass "No default color classes"
  fi

  # Default rounded classes (rounded-sm, rounded-md, rounded-lg, rounded-xl, rounded-2xl, rounded-3xl)
  ROUNDED=$(grep -rn --include='*.tsx' --include='*.ts' \
    -E 'rounded-(sm|md|lg|xl|2xl|3xl)\b' \
    $SEARCH_DIRS 2>/dev/null \
    | grep -v 'node_modules' | grep -v '.test.' || true)
  if [ -n "$ROUNDED" ]; then
    fail "Tailwind default rounded classes found (use rounded-[8px] or rounded-full):"
    echo "$ROUNDED"
  else
    pass "No default rounded classes"
  fi

  # Default shadow classes
  SHADOWS=$(grep -rn --include='*.tsx' --include='*.ts' \
    -E '\bshadow-(sm|md|lg|xl|2xl)\b' \
    $SEARCH_DIRS 2>/dev/null \
    | grep -v 'node_modules' | grep -v '.test.' || true)
  if [ -n "$SHADOWS" ]; then
    fail "Tailwind default shadow classes found (use custom shadow tokens):"
    echo "$SHADOWS"
  else
    pass "No default shadow classes"
  fi
else
  warn "No src/app/components dirs found yet - skipping class scan"
fi

# ---------------------------------------------------------------------------
# 4. No framer-motion imports
# ---------------------------------------------------------------------------
echo ""
echo "=== 4. Motion budget ==="
if [ -n "$SEARCH_DIRS" ]; then
  FRAMER=$(grep -rn --include='*.tsx' --include='*.ts' \
    -E "(from ['\"]framer-motion|from ['\"]motion/react|import.*framer-motion)" \
    $SEARCH_DIRS 2>/dev/null \
    | grep -v 'node_modules' | grep -v '.test.' || true)
  if [ -n "$FRAMER" ]; then
    fail "framer-motion / motion imports found (budget is CSS + GSAP only):"
    echo "$FRAMER"
  else
    pass "No framer-motion imports"
  fi
else
  warn "No src/app/components dirs found yet - skipping motion scan"
fi

# ---------------------------------------------------------------------------
# 5. No undeclared font-family
# ---------------------------------------------------------------------------
echo ""
echo "=== 5. Font family compliance ==="
if [ -n "$SEARCH_DIRS" ]; then
  FONTS=$(grep -rn --include='*.tsx' --include='*.ts' --include='*.css' \
    'font-family' $SEARCH_DIRS 2>/dev/null \
    | grep -v 'var(--font-' | grep -v 'node_modules' | grep -v 'tokens.css' \
    | grep -v '.test.' | grep -v '__variable' || true)
  if [ -n "$FONTS" ]; then
    fail "font-family outside token variables:"
    echo "$FONTS"
  else
    pass "All font-family uses reference token variables"
  fi
else
  warn "No src/app/components dirs found yet - skipping font scan"
fi

# ---------------------------------------------------------------------------
# 6. Contrast checks (WCAG AA) using relative luminance
# ---------------------------------------------------------------------------
echo ""
echo "=== 6. Contrast ratios (WCAG AA) ==="

# WCAG contrast check using node (available in any Next.js project)
check_contrast() {
  local name="$1"
  local fg="$2"
  local bg_color="$3"
  local min_ratio="$4"

  local result
  result=$(node -e "
    function lin(c){c/=255;return c<=0.04045?c/12.92:Math.pow((c+0.055)/1.055,2.4)}
    function lum(h){return 0.2126*lin(parseInt(h.slice(1,3),16))+0.7152*lin(parseInt(h.slice(3,5),16))+0.0722*lin(parseInt(h.slice(5,7),16))}
    const l1=lum('$fg'),l2=lum('$bg_color');
    const lighter=Math.max(l1,l2),darker=Math.min(l1,l2);
    const ratio=(lighter+0.05)/(darker+0.05);
    console.log(ratio.toFixed(1)+' '+(ratio>=$min_ratio?'PASS':'FAIL'));
  ")

  local ratio=$(echo "$result" | awk '{print $1}')
  local status=$(echo "$result" | awk '{print $2}')

  if [ "$status" = "FAIL" ]; then
    fail "$name: contrast ${ratio}:1 < ${min_ratio}:1 required ($fg on $bg_color)"
  else
    pass "$name: contrast ${ratio}:1 >= ${min_ratio}:1 ($fg on $bg_color)"
  fi
}

check_contrast "text vs bg" "#0A1E3F" "#FFFFFF" "4.5"
check_contrast "text-muted vs bg" "#5A6B82" "#FFFFFF" "3.0"
check_contrast "text vs surface" "#0A1E3F" "#F4F6F9" "4.5"
check_contrast "on-primary vs primary" "#FFFFFF" "#2D6CDF" "4.5"
# Navy section contrasts (headhunting + footer)
check_contrast "white vs navy (headhunting)" "#FFFFFF" "#0A1E3F" "4.5"
check_contrast "muted vs navy (headhunting)" "#94A3BB" "#0A1E3F" "3.0"

# ---------------------------------------------------------------------------
# 7. Em-dash check
# ---------------------------------------------------------------------------
echo ""
echo "=== 7. Em-dash ban ==="
if [ -n "$SEARCH_DIRS" ]; then
  EMDASH=$(grep -rn --include='*.tsx' --include='*.ts' \
    $'\xe2\x80\x94' $SEARCH_DIRS 2>/dev/null \
    | grep -v 'node_modules' | grep -v '.test.' || true)
  if [ -n "$EMDASH" ]; then
    fail "Em-dash character found in source files:"
    echo "$EMDASH"
  else
    pass "No em-dash characters found"
  fi
else
  warn "No src/app/components dirs found yet - skipping em-dash scan"
fi

# ---------------------------------------------------------------------------
# Summary
# ---------------------------------------------------------------------------
echo ""
echo "==========================================="
if [ "$VIOLATIONS" -gt 0 ]; then
  echo "RESULT: $VIOLATIONS FAIL(s), $WARNINGS warning(s). Fix before committing."
  exit 1
else
  echo "RESULT: All checks passed. $WARNINGS warning(s)."
  exit 0
fi
