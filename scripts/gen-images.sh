#!/usr/bin/env bash
# Generate all images for sandblastinginsurance.com via HuggingFace FLUX.1-schnell
# Robust: retries up to 4 times, verifies each is a valid image >= 30KB
set -uo pipefail

OUT="/workspace/Websites/sandblastinginsurance.com/public/images"
mkdir -p "$OUT"

# gen <fname> <prompt> [steps] [width] [height]
gen() {
  local fname="$1"; shift
  local prompt="$1"; shift
  local steps="${1:-4}"; shift || true
  local w="${1:-1024}"; shift || true
  local h="${1:-1024}"; shift || true
  local dest="$OUT/$fname"
  local attempt=0
  while [ $attempt -lt 4 ]; do
    attempt=$((attempt+1))
    echo "[$fname] attempt $attempt (steps=$steps ${w}x${h})..."
    curl -s --max-time 200 \
      https://router.huggingface.co/hf-inference/models/black-forest-labs/FLUX.1-schnell \
      -H "Authorization: Bearer $HF_TOKEN" \
      -H "Content-Type: application/json" \
      -d "$(jq -nc --arg p "$prompt" --argjson s "$steps" --argjson w "$w" --argjson h "$h" '{inputs:$p, parameters:{num_inference_steps:$s, width:$w, height:$h}}')" \
      -o "$dest"
    local ftype; ftype=$(file -b "$dest" 2>/dev/null)
    local sz; sz=$(stat -c%s "$dest" 2>/dev/null || echo 0)
    if echo "$ftype" | grep -qiE "image|jpeg|png" && [ "$sz" -ge 30000 ]; then
      echo "[$fname] OK ($sz bytes, $ftype)"
      return 0
    fi
    echo "[$fname] FAIL (size=$sz, type=$ftype)"
    if echo "$ftype" | grep -qi "text\|json"; then head -c 200 "$dest"; echo ""; fi
    sleep 4
  done
  echo "[$fname] GAVE UP after $attempt attempts"
  return 1
}

# === 12 images — SANDBLASTING CONTRACTOR insurance ===

gen "hero.jpg" \
  "Photorealistic cinematic wide shot of industrial sandblasting workers in full protective gear — supplied-air respirators, blast suits — sandblasting a large steel bridge structure, orange sparks and abrasive dust in the air, dramatic industrial environment, powerful professional photography, strong warm industrial lighting, no text, no watermark" 4

gen "coverage.jpg" \
  "Photorealistic elevated view of an industrial sandblasting operation at a large construction site: workers in protective gear operating blast equipment near a large steel structure, compressors and hoses on the ground, safety containment barriers, professional commercial photography, no text" 4

gen "about.jpg" \
  "Photorealistic authentic portrait of a professional sandblasting contractor in clean work clothes standing in front of industrial blasting equipment — blast pot and air compressor — confident trustworthy expression, shallow depth of field, professional commercial photography, no text" 4

gen "og-image.jpg" \
  "Photorealistic wide cinematic industrial landscape of a sandblasting operation: workers in protective gear blasting a large steel tank or structure at an industrial facility, dramatic lighting with dust clouds and sparks, powerful professional photography, no text, no watermark" 4 1216 640

gen "general-liability.jpg" \
  "Photorealistic photo of professional sandblasting contractors in full protective blast suits and supplied-air respirators working on a large commercial building exterior, removing old coatings with abrasive blasting, safety equipment visible, professional industrial photography, no text" 4

gen "tools-equipment.jpg" \
  "Photorealistic photo of professional sandblasting equipment: an industrial blast pot pressure vessel, large air compressor, and heavy-duty abrasive blast hoses and nozzles laid out on a clean industrial surface, bright studio lighting, professional commercial photography, no text" 4

gen "contractor-pollution-liability.jpg" \
  "Photorealistic photo of industrial sandblasting containment setup: heavy protective tarps and shrouds around a steel structure undergoing abrasive blasting, visible dust containment barriers and vacuum extraction equipment, professional industrial photography, no text" 4

gen "workers-comp.jpg" \
  "Photorealistic photo of sandblasting workers in a safety meeting before a blasting job: workers in clean work gear with blast helmets and respirators, a foreman reviewing safety protocols, professional workplace safety photography, no text" 4

gen "commercial-auto.jpg" \
  "Photorealistic photo of industrial contractor trucks and trailers carrying sandblasting equipment — blast pots, compressors, hose reels — at a commercial job site, clean professional vehicles, blue sky, professional commercial automotive photography, no text" 4

gen "umbrella.jpg" \
  "Photorealistic photo of professional industrial insurance consultation: a contractor and insurance agent reviewing large commercial insurance documents at a clean office desk, professional business photography, warm natural light, no text" 4

gen "inland-marine.jpg" \
  "Photorealistic photo of sandblasting contractor equipment being loaded onto a flatbed trailer for transport: industrial blast pot, air compressor, and hose reels secured with straps, professional logistics photography, no text" 4

gen "surety-bonds.jpg" \
  "Photorealistic photo of a professional contractor signing a construction contract or bonding document at a clean office desk with blueprints and a hard hat nearby, professional business photography, warm natural light, no text" 4

echo "=== ALL IMAGE GENERATION ATTEMPTS COMPLETE ==="
ls -la "$OUT"
