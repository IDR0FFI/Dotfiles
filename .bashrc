#
# ~/.bashrc
#

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

export JAVA_HOME=/usr/lib/jvm/java-21-openjdk

alias ll='ls -la --color=auto'
alias grep='grep --color=auto'
PS1='[\u@\h \W]\$ '

