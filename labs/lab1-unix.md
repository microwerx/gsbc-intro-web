# Lab 1: Using the Unix Operating System

## Un*x Operating Systems

* GNU/Linux
* Windows Subsystem for Linux
* macOS

> "Even though the UNIX system introduces a number of innovative programs and techniques, no single program or idea makes it work well. Instead, what makes it effective is the approach to programming, a philosophy of using the computer. Although that philosophy can't be written down in a single sentence, at its heart is the idea that the power of a system comes more from the relationships among programs than from the programs themselves. Many UNIX programs do quite trivial things in isolation, but, combined with other programs, become general and useful tools." (Kernigham and Pike, The UNIX Programming Environment, 1984)

|              |                                                                                             |
| :----------- | :------------------------------------------------------------------------------------------ |
| `ls`         | list directory contents                                                                     |
| `pwd`        | print name of current/working directory                                                     |
| `touch`      | change file timestamps                                                                      |
| `cp`         | copy files and directories                                                                  |
| `mv`         | move (rename) files                                                                         |
| `rm`         | remove files or directories                                                                 |
| `mkdir`      | make directories                                                                            |
| `rmdir`      | remove empty directories                                                                    |
| `cd`         | built-in command of `bash` to change directory                                              |
| `cat`        | concatenate files and print on the standard output                                          |
| `bash`       | GNU Bourne-Again SHell                                                                      |
| `vim` (`vi`) | Vi IMproved, a programmer's text editor                                                     |
| `man`        | an interface to the system reference manuals                                                |
| `ping`       | send ICMP ECHO_REQUEST to network hosts                                                     |
| `ssh`        | a program for logging into a remote machine and for executing commands on a remote machine. |
| `ssh-keygen` | generates, manages and converts authentication keys for ssh(1).                             |
| `more`       | file perusal filter for crt viewing                                                         |
| `less`       | opposite of more                                                                            |
| `head`       | output the first part of files                                                              |
| `tail`       | output the last part of files                                                               |
| `sort`       | sort lines of text files                                                                    |
| `uniq`       | report or omit repeated lines                                                               |
| `grep`       | print lines that match patterns                                                             |

## Opening a command shell

* Windows: Windows Terminal (or PowerShell)
* macOS: Terminal
* Linux: Terminal (GNOME Terminal, xterm, etc.)

## Navigating the file system

Use the commands `ls`, `pwd`, and `cd`.

## Creating a file

If the file `myfile` does not exist, the `touch` command will create it, otherwise it will update its timestamp. It's useful for creating an empty file.

`touch myfile`

## Printing a text file

Use the `cat` command.

## Checking access to a remote server

Try out `ping www.google.com`

Once you get the IP address, try `ping <IP Address>`

What's the difference in time if you try `ping localhost`, `ping google.com`, and `ping www.tv-tokyo.co.jp`?

What happens if you `ping 255.255.0.0`?

## Downloading a file from the internet

`wget https://www.gutenberg.org/files/98/98-0.txt`

View it with `less 98-0.txt`

Search for the word `said` with `cat 98-0.txt | grep said`

Count the number of times `said` is found with `cat 98-0.txt | grep -c said`

## Editing the file with Vi

`Vi` is a programmer's text editor. It is normally available on all Un*x systems. The slightly easier to use `nano` is also commonly available, but not as full featured.

Let's prepare for this in next weeks class. Here is a YouTube video to help you learn Vi [Vim Basics in 8 minutes](https://www.youtube.com/watch?v=ggSyF1SVFr4).

- 0:00 - Introduction
- 0:53 - edit a file in vim (vim filename.txt || vi filename.txt)
- 1:12 - how to quit vim (:q)
- 1:50 - saving files in vim, and other ways of exiting
- 2:12 - what are vim modes (ESC/i)
- 3:14 - how to delete a single line with vim (dd)
- 3:30 - how to delete multiple lines with vim (#dd, e.g. 5dd)
- 3:47 - how to undo changes in vim (u)
- 4:06 - how to 'redo' changes (ctrl-r)
- 4:32 - searching text in vim ( /yourtext + ENTER)
- 5:52 - how to find and replace text in vim ( :%s/yourtext/replacetext/g (+c))
- 7:23 - Conclusion
