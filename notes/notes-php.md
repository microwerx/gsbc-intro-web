# Using PHP

[PHP Windows Downloads](https://windows.php.net/download/)

```ps1
PS1$ cd Z:\usr\php-8.1.0-nts-Win32-vs16-x64

```

The command to run PHP as a test server is `php -S localhost:8000 -c php.ini`

Make sure you have this line in your php.ini file:

```text
extension=sqlite3
```

If you're starting a development server,
