#!/bin/bash

( top -b -d 1.7 -n 3 -o +%CPU  | grep -A 2 'Task\|%Cpu\|KiB Mem\|PID USER' | tail -n8 > /tmp/cpu.txt ) &
TOP_PID=$!

( vnstat -ru -tr 2 -i wlp58s0 | tail -n3 | tr -s ' ' > /tmp/rx-tx.txt ) &
VNSTAT_PID=$!

# battery
BATTERY=`acpi -b`
TEMP=`echo -e "${BATTERY}" | sed -e 's/,//g'`
BATTERY=`echo $TEMP | cut -d' ' -f4`
if [[ "$BATTERY" == "100%" || "$BATTERY" == "99%" ]]; then
    BATTERY=" "
fi
BATTERY_CHARGING=`echo $TEMP | cut -d' ' -f3`
BATTERY_COLOR="#f62"
if [[ "$BATTERY_CHARGING" == "Charging" ]]; then
  BATTERY_COLOR="#2f6"
fi

# network speed
wait $VNSTAT_PID
CONTENT=`cat /tmp/rx-tx.txt`
PAD=$(printf '%0.1s' " "{1..60})
IF_FIXED_WIDTH=15
rx=`echo "${CONTENT}" | head -n1 | cut -d' ' -f3,4`
rx_PAD=`printf '%*.*s' 0 $((IF_FIXED_WIDTH - ${#rx} - 2 )) "$PAD"`
IF_FIXED_WIDTH=13
tx=`echo "${CONTENT}" | tail -n1 | cut -d' ' -f3,4`
tx_PAD=`printf '%*.*s' 0 $((IF_FIXED_WIDTH - ${#tx} - 2 )) "$PAD"`

# cpu
wait $TOP_PID
CONTENT=`cat /tmp/cpu.txt`
RUNNING=`echo "${CONTENT}" | grep Tasks | tr -s ' ' | cut -d' ' -f4`

TEMP=`echo "${CONTENT}" | head -n2 | tail -n1 | tr -s ' '`
US=`echo "${TEMP}" | cut -d' ' -f2`
SY=`echo "${TEMP}" | cut -d' ' -f4`
NI=`echo "${TEMP}" | cut -d' ' -f6`
CPU_PERCENTAGE=`bc <<< "$US + $SY + $NI"`

TEMP=`echo "${CONTENT}" | tail -n2 | head -n1 | tr -s ' '`
TEMP=`echo -e "${TEMP}" | sed -e 's/^[[:space:]]*//'`
APP1=`echo "${TEMP}" | cut -d' ' -f12`
APP1_PERCENTAGE=`echo "${TEMP}" | cut -d' ' -f9`
if [[ "$APP1_PERCENTAGE" == "0.0" ]]; then
  APP1_TEXT=""
else
  APP1_TEXT=`echo "${APP1} ${APP1_PERCENTAGE}%"`
fi

TEMP=`echo "${CONTENT}" | tail -n1 | tr -s ' '`
TEMP=`echo -e "${TEMP}" | sed -e 's/^[[:space:]]*//'`
APP2=`echo "${TEMP}" | cut -d' ' -f12`
APP2_PERCENTAGE=`echo "${TEMP}" | cut -d' ' -f9`
if [[ "$APP2_PERCENTAGE" == "0.0" ]]; then
  APP2_TEXT=""
else
  APP2_TEXT=`echo "${APP2} ${APP2_PERCENTAGE}%"`
fi

TOTAL_MEM=`echo "${CONTENT}" | grep 'KiB Mem' | tr -s ' '| cut -d' ' -f4`
AVAIL_MEM=`echo "${CONTENT}" | grep 'KiB Swap' | tr -s ' ' | cut -d' ' -f9`
USED_MEM=`bc <<< "$TOTAL_MEM - $AVAIL_MEM"`
MEM_PERCENTAGE=`bc <<< "scale=6; $USED_MEM / $TOTAL_MEM * 100 + 0.49"`
MEM_PERCENTAGE=`bc <<< "scale=0; $MEM_PERCENTAGE / 1"`

echo '<span foreground="#f26" size="x-large" weight="heavy">&#8595;</span>'${rx} '<tt>'${rx_PAD}'</tt><span foreground="#f26" size="x-large" weight="heavy">&#8593;</span>'${tx}'<tt>'${tx_PAD}'</tt><span foreground="#0f0" size="large">'${CPU_PERCENTAGE}'%</span> '${RUNNING}': '${APP1_TEXT}'  '${APP2_TEXT}' <span foreground="'${BATTERY_COLOR}'" size="large">' ${BATTERY} '</span><span foreground="#48f" size="large">'${MEM_PERCENTAGE}'%</span>'