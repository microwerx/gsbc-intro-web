# The Internet

## Internet URLs

URLs: <https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL?>

- Scheme
- Domain Name
- Port
- Path to the File
- Parameters
- Anchor

![URL](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL/mdn-url-all.png)

## OSI Model

> The Open Systems Interconnection model (OSI model) is a conceptual model that characterises and standardises the communication functions of a telecommunication or computing system without regard to its underlying internal structure and technology. Its goal is the interoperability of diverse communication systems with standard communication protocols.

<https://en.wikipedia.org/wiki/OSI_model>

| Layer | #    | Name         | Protocol Data Unit | Function |
| :---- | :--- | :----------- | :----------------- | :------- |
| Host  | 7    | Application  | Data               | ...      |
|       | 6    | Presentation |                    | ...      |
|       | 5    | Session      |                    | ...      |
|       | 4    | Transport    | Segment, Datagram  | ...      |
| Media | 3    | Network      | Packet             | ...      |
|       | 2    | Data link    | Frame              | ...      |
|       | 1    | Physical     | Bit, Symbol        | ...      |

## Application Layer

* DHCP
* DNS
* FTP
* HTTP
* HTTPS
* IMAP
* SMTP
* TLS/SSL
* SSH
* ...

## Transport Layer

* TCP
* UDP
* ...

## Internet Layer

* IP (IPv4, IPV6)
* ICMP

## Link Layer

* Address Resolution Protocol (ARP)
* NDP
* Tunnels
* PPP

## Lab: Ping and TraceRoute

```
$ ping 127.0.0.1
$ ping localhost
$ ping <router ip address>
$ ping www.bing.com
$ ping <address from www.bing.com>
$ ping tv-tokyo.co.jp
$ traceroute www.bing.com
$ traceroute nvbc.org
```

## Lab @Home: SSH

