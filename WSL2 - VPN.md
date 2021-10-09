# Overview

Internet connection and DNS routing are broken from WSL2 instances, when some VPNs are active.
The workaround breaks down into two problems:
1. Network connection to internet
2. DNS in WSL2

This problem is tracked in multiple microsoft/WSL issues including, but not limited to:

- microsoft/WSL#5068
- microsoft/WSL#4277
- microsoft/WSL#4246

## Network connection

When the VPN connection is active, network traffic out of WSL2 is not passed to the internet.

Changing the Interface Metric 1 -> 6000 for AnyConnect VPN Adapter resolves the connection issue, but this has to be done after each time the VPN connects.

By default, the Interface Metrics for AnyConnect are:
- IPv6: 6000
- IPv4: 1

`ping` times out from WSL Shell.

Changing the Interface Metrics for AnyConnect to:
- IPv6: 6000
- IPv4: 6000

`ping` to IP Addresses succeed, but still no DNS Resolution.

## DNS Resolution

When the VPN is active, the autogenerated `/etc/resolv.conf` does not work. The list of nameservers must be manually built to include some sane default DNS Name Servers and the DNS from the VPN.

First, disable automatically generating `/etc/resolv.conf`.
Add the following configuration, or create the file if it doesn't exist. The path to this file is from the shell prompt of your WSL2 instance.

*/etc/wsl.conf*

```
[network]
generateResolvConf = false
```

Next, manually add the corportate DNS Server as the first `nameserver` in `/etc/resolv.conf`.

*/etc/resolv.conf*

```
nameserver <corporateDNS1>
nameserver <corporateDNS2>
nameserver 1.1.1.1
```

To get `<corporateDNS>` addresses, use `ipconfig /all` from `CMD` or `Powershell` prompt, and check the details of the VPN adapter:

```
Description . . . . . . . . . . . : Cisco AnyConnect Secure Mobility Client Virtual Miniport Adapter for Windows x64
Physical Address. . . . . . . . . : XX-XX-XX-XX-XX-XX
DHCP Enabled. . . . . . . . . . . : No
Autoconfiguration Enabled . . . . : Yes
IPv6 Address. . . . . . . . . . . : xxxx:xxxx:xxxx:xxxx(Preferred)
Link-local IPv6 Address . . . . . : xxxx:xxxx:xxxx:xxxx(Preferred)
IPv4 Address. . . . . . . . . . . : 10.20.30.40(Preferred)
Subnet Mask . . . . . . . . . . . : 255.255.255.255
Default Gateway . . . . . . . . . : ::
                                    0.0.0.0
DHCPv6 IAID . . . . . . . . . . . :
DHCPv6 Client DUID. . . . . . . . : 
DNS Servers . . . . . . . . . . . : 123.45.67.89    <- Corporate DNS 1
                                    123.45.67.90    <- Corporate DNS 2
Primary WINS Server . . . . . . . : xxx.xx.xxx.xx
NetBIOS over Tcpip. . . . . . . . : Enabled
```

## Automatically update Interface Metric

To automate this, I put the PS command in a script and created a Scheduled Task to run every time there is a network change.

### Save the script in a  file
First, create the script. I have a 'scripts' directory in my Windows user home, so I put it at:

**%HOMEPATH%\scripts\UpdateAnyConnectInterfaceMetric.ps1**

```
Get-NetAdapter | Where-Object {$_.InterfaceDescription -Match "Cisco AnyConnect"} | Set-NetIPInterface -InterfaceMetric 6000
```

You can save it where you want, just make sure to use that path in step 13 below.

### Create the scheduled task:

1. Open 'Task Scheduler'
2. Click "Create Task" on Right Sidebar
3. Name: Update Anyconnect Adapter Interface Metric for WSL2
4. Set Security Options
    - Check box: 'Run with highest priveleges'
5. Select 'Triggers' Tab
6. Click 'New' at bottom of Window
7. Open 'Begin the task' drop-down
8. Select 'On an Event'
9. Configure Event:
    - option 1: Trigger on any Network Change
        - Log: 'Microsoft-Windows-NetworkProfile/Operational'
        - Source: 'NetworkProfile'
        - Event ID: '10000'
    - option 2: Trigger only when AnyConnect Client successfully connects to VPN
        - Log: 'Cisco AnyCOnnect Secure Mobility Client'
        - Source: 'acvpnagent'
        - Event ID: '2039'
10. Click 'OK'
11. Select 'Actions' Tab
12. Click 'New'
13. Configure Action:
    - Action: 'Start a Program'
    - Program/script: 'Powershell.exe'
    - Add arguments: '-ExecutionPolicy Bypass -File %HOMEPATH%\scripts\UpdateAnyConnectInterfaceMetric.ps1'
14. Click 'OK'
15. Select 'Conditions' Tab
16. Uncheck box:
    - Power -> Start the task only if the computer is on AC Power
17. Click 'OK'

When AnyConnect finishes connecting, a Powershell window pops up for a couple seconds and WSL can reach the network.