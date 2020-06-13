HISTFILE=${ZDOTDIR:-$HOME}/.zsh_history

# share history across multiple zsh sessions
setopt SHARE_HISTORY

# append to history
setopt APPEND_HISTORY

# auto cd to a directory if `cd` is missed
setopt AUTO_CD

# adds commands as they are typed, not at shell exit
setopt INC_APPEND_HISTORY

# expire duplicates first
setopt HIST_EXPIRE_DUPS_FIRST

# do not store duplications
setopt HIST_IGNORE_DUPS

#ignore duplicates when searching
setopt HIST_FIND_NO_DUPS

# removes blank lines from history
setopt HIST_REDUCE_BLANKS

alias ls='ls -G'
alias docker-mongo='docker run --name=mongo -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=root -p27017:27017 -d -t mongo:3-xenial'

export JAVA_HOME=$HOME/jdk-8
export PATH=$JAVA_HOME/bin:$HOME/sbt/bin:$HOME/node/bin:$PATH

A="\[$(tput setaf 140)\]"
B="\[$(tput setaf 74)\]"
C="\[$(tput setaf 215)\]"
RESET="\[$(tput sgr0)\]"
PROMPT='%(?.%F{green}√.%F{red}?%?)%f %F{215}%~%f %# '