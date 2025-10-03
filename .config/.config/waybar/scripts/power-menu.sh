#!/bin/bash

# Options for the power menu
options="Lock\nSleep\nLogout\nReboot\nShutdown"

# Use rofi to display the menu (you can also use wofi for wayland)
choice=$(echo -e "$options" | rofi -dmenu -i -p "Power Menu" -theme-str 'window {width: 400px; height: 350px;}')

case $choice in
    "Lock")
        # Use your preferred lock command
        hyprlock || swaylock || i3lock
        ;;
    "Sleep")
        systemctl suspend
        ;;
    "Logout")
        # For Hyprland
	hyprctl clients | grep pid | tr -d 'pid:' | xargs kill
        hyprctl dispatch exit
        # For other WMs, use: pkill -KILL -u $USER
        ;;
    "Reboot")
       	hyprctl clients | grep pid | tr -d 'pid:' | xargs kill
        systemctl reboot
        ;;
    "Shutdown")
       	hyprctl clients | grep pid | tr -d 'pid:' | xargs kill
	systemctl poweroff
        ;;
esac
