#!/bin/bash

ICON_PERFORMANCE="󰾅"   # e.g. 🏎️
ICON_BALANCED="󰿡"      # ⚖️
ICON_POWERSAVER="󰾜"    # 🌱

# Get current profile
current_profile=$(powerprofilesctl get)

# Handle click
if [[ "$1" == "click" ]]; then
  case "$current_profile" in
    performance)
      powerprofilesctl set balanced
      ;;
    balanced)
      powerprofilesctl set power-saver
      ;;
    power-saver)
      powerprofilesctl set performance
      ;;
  esac
  exit 0
fi

# Output icon + tooltip
case "$current_profile" in
  performance)
    echo "{\"text\": \"$ICON_PERFORMANCE\", \"tooltip\": \"performance\"}"
    ;;
  balanced)
    echo "{\"text\": \"$ICON_BALANCED\", \"tooltip\": \"balanced\"}"
    ;;
  power-saver)
    echo "{\"text\": \"$ICON_POWERSAVER\", \"tooltip\": \"power-saver\"}"
    ;;
  *)
    echo "{\"text\": \"󰔟\", \"tooltip\": \"unknown\"}"
    ;;
esac
