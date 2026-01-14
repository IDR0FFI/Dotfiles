#! /bin/bash

sleep 5
notify-send "Auto Firefox Transparency Script has started"
echo "Auto Firefox Transparency Script has started"

LAST_STATE=""

while true; do
    STATUS=$(playerctl --player=firefox status 2>/dev/null)

    if [[ "$STATUS" != "$LAST_STATE" ]]; then
        if [[ "$STATUS" == "Playing" ]]; then
		hyprctl dispatch setprop "class:^(firefox)$ opaque 1"
        else
		hyprctl dispatch setprop "class:^(firefox)$ opaque 0"
        fi
        LAST_STATE="$STATUS"
    fi

    sleep 2
done
