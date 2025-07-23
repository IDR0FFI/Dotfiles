#! /bin/bash

changeAmount=$(echo "scale=1; (80/100) * $(brightnessctl get)" | bc)

if [ $1 == "-" ]; then
	brightnessctl --save
	brightnessctl set $changeAmount-
else
	brightnessctl --restore
fi
