PluralSight Apr: olanrewaju.axtin@aallaa.org / 1Qazxsw2

http https://dzone.com/services/widget/article-listV2/list page==1 sort==newest

To use system proxy java -Djava.net.useSystemProxies=true ... or System.setProperty("java.net.useSystemProxies", "true") from http://docs.oracle.com/javase/7/docs/api/java/net/doc-files/net-properties.html 
```bash
-Dhttp.proxyHost=... -Dhttp.proxyPort=8080 -Dhttp.proxyUser=... -Dhttp.proxyPassword=... -Dhttps.proxyHost=... -Dhttps.proxyPort=8080 -Dhttps.proxyUser=... -Dhttps.proxyPassword=... -Djavax.net.ssl.trustStore=/path/to/cacerts -Djavax.net.ssl.trustStorePassword=changeit
```

http://e.olivegarden.com/H/2/v400000164d7c09282995fda6e966a5468/10f7b6b2-4dfe-4189-a27d-ab165b85678d/HTML

https://mp.vibescm.com/p/4vhxi9?data%5Bexpiration_date%5D=10%2F06%2F2018&group_code=2018-10-04&unique_identifier=88ebf11005835c7cc16eb7261bb84e096168

```bash
Xft.dpi: 144
Xft.autohint: 0
Xft.lcdfilter:  lcddefault
Xft.hintstyle:  hintfull
Xft.hinting: 1
Xft.antialias: 1
Xft.rgba: rgb

URxvt.font: xft:Noto Sans Mono:Light:pixelsize=27
URxvt.scrollBar: false
URxvt.geometry: 132x27
URxvt.saveLines: 9999

URxvt.cursorColor:  #c5c8c6
URxvt.pointerColor: #dc74d1
URxvt.depth:        32
URxvt.background:   [95]#1d1f21
URxvt.foreground:   #e5e8e6
URxvt*color0: #3f3f3f
URxvt*color1: #ac3c3c
URxvt*color2: #60b48a
URxvt*color3: #dfaf8f
URxvt*color4: #506070
URxvt*color5: #dc8cc3
URxvt*color6: #8cd0d3
URxvt*color7: #dcdccc
URxvt*color8: #79A9FF
URxvt*color9: #da6e6e
URxvt*color10: #c3bf9f
URxvt*color11: #f0dfaf
URxvt*color12: #94bff3
URxvt*color13: #ec93d3
URxvt*color14: #93e0e3
URxvt*color15: #ffffff

URxvt*tabbed.tabbar-fg: 4
URxvt*tabbed.tabbar-bg: 16
URxvt*tabbed.tab-fg:    15
URxvt*tabbed.tab-bg:    4

URxvt.letterSpace: -1
URxvt.lineSpace: 5
URxvt.borderLess: true
URxvt.internalBorder: 5
URxvt.iconFile: /usr/share/icons/Adwaita/scalable/apps/utilities-terminal-symbolic.svg
URxvt.underlineURLs: true
URxvt.urlButton:     1

alias cls="printf '\033c'"
G="\[$(tput setaf 39)\]"
H="\[$(tput setaf 131)\]"
R="\[$(tput sgr0)\]"
PS1="${G}\h${R}:${H}\w${R} $ "
```

https://hortonworks.com/downloads/#sandbox https://archive.cloudera.com/hwx-sandbox/hdp/hdp-3.0.1/HDP_3.0.1_docker-deploy-scripts_18120587fc7fb.zip

```java
import java.awt.*;
import java.util.Random;

public class Main { // chay chuot
    public static void main(String[] args) throws Exception {
        Random random = new Random();
        Robot robot = new Robot();
        int prevx = -1;
        int prevy = -1;

        while (true) {
            Point mouseLocation = MouseInfo.getPointerInfo().getLocation();
            int x = (int) mouseLocation.getX();
            int y = (int) mouseLocation.getY();
            if (x == prevx && y == prevy) {
                int newx = x < 6 ? x + 5 : (x > 1910 ? x - 5 : (random.nextBoolean() ? x + 5 : x - 5));
                int newy = y < 6 ? y + 5 : (y > 1070 ? y - 5 : (random.nextBoolean() ? y + 5 : y - 5));
                robot.mouseMove(newx, newy);
                robot.delay(59_999);
            }
            prevx = x;
            prevy = y;
        }
    }
}
```

https://howlerjs.com/ js audio library

```bash
#!/bin/bash
# this is for Z3
X=0
while [ $X -lt 4 ]; do
    adb shell screencap -p /sdcard/sample.png
    adb pull /sdcard/sample.png /dev/shm/sample.png
    X=$(identify -format "%k" -crop 1070x50+0+1725 /dev/shm/sample.png)
done

b1=$(identify -verbose -crop 40x40+300+1730 /dev/shm/sample.png | grep -A 2 'Colors: 1' | tail -n 1 | cut -d'#' -f2 | cut -d' ' -f1)
b2=$(identify -verbose -crop 40x40+520+1730 /dev/shm/sample.png | grep -A 2 'Colors: 1' | tail -n 1 | cut -d'#' -f2 | cut -d' ' -f1)
b3=$(identify -verbose -crop 40x40+860+1730 /dev/shm/sample.png | grep -A 2 'Colors: 1' | tail -n 1 | cut -d'#' -f2 | cut -d' ' -f1)

echo http://ec2-3-90-64-52.compute-1.amazonaws.com/z3/\?c=\&b1=${b1}\&b2=${b2}\&b3=${b3}

echo 'convert -crop 1075x326+0+95 /dev/shm/sample.png /dev/shm/yellow.png'

```

### Running Confluent 5.3.1 in Windows

#### Zookeeper

```bash
java -Xmx512M -Xms512M -server -XX:+UseG1GC -XX:InitiatingHeapOccupancyPercent=35 -Djava.awt.headless=true -Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false -Dkafka.logs.dir=\kafka-logs-dir -Dlog4j.configuration=file:.\etc\kafka\log4j.properties -cp ce-broker-plugins\build\libs\*;ce-broker-plugins\build\dependant-libs\*;ce-auth-providers\build\libs\*;ce-auth-providers\build\dependant-libs\*;share\java\kafka\*;share\java\confluent-metadata-service\*;share\java\rest-utils\*;share\java\confluent-common\*;support-metrics-client\build\dependant-libs-2.12.8\*;support-metrics-client\build\libs\*;\cygwin64\usr\share\java\support-metrics-client\*;support-metrics-fullcollector\build\dependant-libs-2.12.8\*;support-metrics-fullcollector\build\libs\* org.apache.zookeeper.server.quorum.QuorumPeerMain etc\kafka\zookeeper.properties
```

#### Broker

```bash
java -Xmx1G -Xms1G -server -XX:+UseG1GC -XX:InitiatingHeapOccupancyPercent=35 -Djava.awt.headless=true -Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false -Dkafka.logs.dir=\kafka-logs-dir -Dlog4j.configuration=file:.\etc\kafka\log4j.properties -cp ce-broker-plugins\build\libs\*;ce-broker-plugins\build\dependant-libs\*;ce-auth-providers\build\libs\*;ce-auth-providers\build\dependant-libs\*;share\java\kafka\*;share\java\confluent-metadata-service\*;share\java\rest-utils\*;share\java\confluent-common\*;support-metrics-client\build\dependant-libs-2.12.8\*;support-metrics-client\build\libs\*;support-metrics-fullcollector\build\dependant-libs-2.12.8\*;support-metrics-fullcollector\build\libs\* io.confluent.support.metrics.SupportedKafka etc\kafka\server.properties
```

#### Schema Registry

```bash
java -Xmx512M -server -XX:+UseG1GC -XX:InitiatingHeapOccupancyPercent=35 -Djava.awt.headless=true -Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false -Dschema-registry.log.dir=logs -Dlog4j.configuration=file:.\etc\schema-registry\log4j.properties -cp .;package-schema-registry\target\kafka-schema-registry-package-*-development\share\java\schema-registry\*;share\java\confluent-security\schema-registry\*;share\java\confluent-common\*;share\java\rest-utils\*;share\java\schema-registry\* io.confluent.kafka.schemaregistry.rest.SchemaRegistryMain etc\schema-registry\schema-registry.properties
```

#### Control Center

```bash
java -cp share\java\acl\*;share\java\confluent-control-center\*;share\java\monitoring-interceptors\*;share\java\rest-utils\*;share\java\confluent-common\* -Xmx6g -server -XX:+UseConcMarkSweepGC -XX:+CMSClassUnloadingEnabled -XX:+CMSScavengeBeforeRemark -XX:+DisableExplicitGC -Djava.awt.headless=true -Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.authenticate=false -Dcom.sun.management.jmxremote.ssl=false -Dconfluent.controlcenter.log.dir=\tmp\control-center-logs -Dlog4j.configuration=file:.\etc\confluent-control-center\log4j.properties io.confluent.controlcenter.ControlCenter etc\confluent-control-center\control-center-dev.properties
```
