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

## Running your own HTML server

You can use [Python](https://python.org)

* Windows: [Microsoft Store](https://www.microsoft.com/store/productId/9PJPW5LDXLZ5)
* Windows: (https://python.org)
* Mac: `brew install python`

```bash
$ python3 -m http.server
```

On Windows, if you installed version `3.10` from the MS Store, you can run:

```bash
PS > python3.10 -m http.server
```

You can also use [Node](https://nodejs.org). This is more advanced, but offers significantly more features. You need to know how to run commands as a **superuser**. In Mac and Linux, know how to use `sudo`. In Windows, know how to right-click on an app and `Run as Administrator`.

Initial setup:

```bash
PS > npm install -g lite-server eslint
```

Run a web server:

```bash
PS > lite-server
```

At this point, once you are running a server, open the URL `http://localhost:8000` or `http://localhost:3000`. You may have a slightly different port than what is mentioned here, so check what your console tells you.
