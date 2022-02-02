# The Development Environment

- Why is it important to know how to set up a development environment?
- How do you install new software on your machine?
- Where do you get new software on your machine?
- What's the difference between signed code and unsigned code?
- How do you keep your software updated on your computer?

## Windows

- Microsoft Terminal
- GVIM
- Visual Studio Code
- Git

## macOS

- Xcode
- Xcode command line tools
- Brew.sh

## Linux

- `apt` (Debian based systems)
- `yum` (RedHat based systems)

## Check if GitHub Pages is turned on

As a prerequisite, let's make sure GitHub Pages is turned on. Refer to these docs for detailed instructions:

<https://docs.github.com/en/pages>

## SSH

Refer to these docs for detailed instructions:

<https://docs.github.com/en/authentication/connecting-to-github-with-ssh>

- Check for an existing key
- Generate a new key
- Add a new key
- Test your connection
- About SSH key passphrases

## Install SSH key on GitHub

## Create our first HTML page

```bash
$ git clone git@github.com:yourusername/gsbc-intro-web.git
$ cd gsbc-intro-web
$ touch hello.html
$ git commit -a -m "added first HTML hello page"
$ git push
```

## Edit HTML page

Run `vim hello.html` to edit your file. Type in the following code:

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Hello, World</title>
    </head>

    <body>
        <h1>Hello, World</h1>

        <p>This site is under construction.</p>
    </body>
</html>
```

Make sure you save and quit with `wq`.

## Update the Hello page on GitHub

We want to Commit and Push Changes

```bash
$ git commit -a -m "Updated hello world page"
$ git push
```

## Visit your website

<https://yourusername.github.io/gsbc-intro-web/hello.html>
