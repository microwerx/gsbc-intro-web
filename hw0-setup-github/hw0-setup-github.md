# Homework 0: Set up GitHub

**Git** is a tool for tracking changes in files, often with text-based source code files. It is often used for *source control*, tracking the change in source code files for the duration of a project. It allows you to see every change to the project, help you work with others, and allow you to have several branches of code.

[Link to Git book](https://git-scm.com/book/en/v2)

**GitHub** is a place for hosting Git repositories. For this course, you will need to create an account. After you have created an account, you will need to create a **public** repository called `gsbc-intro-web`. After you have created this account, you will need to enable Git Pages so you can use GitHub like a web server.

You probably do not have the program `git` installed on your computer. Here are some links for learning how to install git so you can use it with your command line.

* [https://git-scm.com]

## Windows

Use the Windows installer from the Git SCM website.

- Ensure you use OpenSSH so that you can run the `ssh-agent`, `ssh-keygen`, and `ssh-add` commands from the command line.

## macOS

First, install `brew`:

```bash
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
Then install `git`

```bash
$ brew install git
```

## Linux

For Debian derived systems using `apt`:

```bash
$ sudo apt install git
```

Or for Fedora derived systems using `yum`:

```bash
$ sudo yum install git
```

## Set up your username and email

Before you can run git commands, you need to set up your name and your email so that Git knows who saved the commit messages.

```bash
$ git config --global user.name "Your Name"
$ git config --global user.email "youremail@yourdomain.com"
```

You can check if they are set up by running the following command:

```bash
$ git config --list
```

If you have problems checking in code, please ensure you have done this step.

## Clone your repository

First, let's make a directory to store our source code files:

```bash
mkdir github
cd github
```

On the command line, run the following command:

```bash
git clone git@github.com:yourusername/gsbc-intro-web.git
```

From your `home` directory, you should have a path:

```
cd gsbc-intro-web
ls
```

You should see the `README.md` file that was initially created with your GitHub repository.

## Make changes to the README.md file

Let's make a change using the `Vi` text editor.

```bash
vi README.md
```

Press the letter `i` to enter INSERT mode. Use the arrow keys to the end of the file and press `<ENTER>` to add a new line. Add a sentence to your file. Press `<ESC>` to exit INSERT mode. Type `:wq` to write the changes to your file and quit `Vi`.

Now, check if there are changes to your git repository by using the `git status` command.

```bash
git status
```

## Check in the work to the respository

The following commands will add the README.md file to the list of files we want to commit.

```bash
git add README.md
git commit -m "Update README"
```

Now if we run `git status`, we will see that there are changes which we can push.

```bash
git status
git push
```

This will now send our work back to GitHub. If we got back to the GitHub repository website, we will see the changes applied when we refresh the page. Cool, huh?

## Workflow

```bash
# 1. at beginning of day, pull your repo
git pull
# 2. do your edits on your code
vim myfile.md
# 3. commit your work
git commit -a -m "HW?: briefly explain work..."
# repeat the steps two and three as necessary
# 4. at the end of day, push your repo
git push
```

## SSH

Follow the instructions at <https://docs.github.com/en/authentication/connecting-to-github-with-ssh>.

The general process is:

- Make your SSH key if you don't already have them.
  - The private key is at `~/.ssh/id_ed25519`
  - The public key is at `~/.ssh/id_ed25519.pub`
- Set up GitHub with your SSH key by giving them the **public key**.
- Add your SSH **private key** to your SSH Agent.
  - `ssh-add ~/.ssh/id_25519`

Here is a high level summary of the commands:

```bash
# This saves the files `id_ed25519` and `id_ed25519.pub` in the directory `~/.ssh/`, where ~ is your home directory.

# Use a simple passphrase you can easily email
$ ssh-keygen -t ed25519 -C "your_email@example.com"

# Ensure the ssh is started.
$ eval "$(ssh-agent -s)"

# Add the private key to the SSH agent
$ ssh-add ~/.ssh/id_ed25519

# If running a Mac, use the following command to copy the public key into your clipboard:
$ pbcopy < ~/.ssh/id_ed25519.pub

# If running Windows, use the following command to open Notepad, and use that to copy the public key into your clip board:
$ notepad ~/.ssh/id_ed25519.pub

# Go to https://github.com/settings/keys and add your public key and now you can test your connection to GitHub:
$ ssh -T git@github.com
```
