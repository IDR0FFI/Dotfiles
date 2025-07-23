#!/bin/bash

# Options for the power menu
options="Lock\nSleep\nLogout\nReboot\nShutdown"

# Use rofi to display the menu (you can also use wofi for wayland)
choice=$(echo -e "$options" | rofi -dmenu -i -p "Power Menu" -theme-str 'window {width: 200px; height: 250px;}')

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
        hyprctl dispatch exit
        # For other WMs, use: pkill -KILL -u $USER
        ;;
    "Reboot")
        systemctl reboot
        ;;
    "Shutdown")
        systemctl poweroff
        ;;
esac
