# Our First HTML5 + CSS + JavaScript project

<https://microwerx.github.io/gsbc-intro-web/index.html>

## Assignment 1

## The HTML Template

* The default page is `index.html`.
* Let's look at a very basic HTML file.

Essential elements:

* `DOCTYPE`
* `charset`
* `html`, `head`, and `body` tags

## HTML Elements

The tag consists of an element name surrounded by "`<`" and "`>`" characters. Tag names are **case insensitive**. That means `<TITLE>`, `<Title>`, and `<title>` all refer to the same thing. If the tag does not surround any content, you can use the form `<tag/>`.

An HTML element can have **attributes** which give extra information about that element. For example, this image tag has an attribute that tells it the URL it should load.

```html
<img src="image.png" />
```

There are some [global attributes](https://www.w3schools.com/TAgs/ref_standardattributes.asp) that may be used with every html tag. You will commonly encounter `id`, `class`, and `style`.

## The CSS Template

You can use the `<style>` tag to put CSS code inside your HTML `<head>` section. CSS uses **selectors** followed by a **declaration block**. Declarations are **property-value** pairs separated by a colon and end with a semicolon.

```css
h1 {
    font-family: 'Times New Roman', serif;
}
```

Here are a few kinds of selectors:

* **tag** selectors (`h1`, `p`)
* **class** selectors (`.className`) that begin with a period.
* **id** selectors (`#idName`) that begin with a hash tag.
* **universal** selector (`*`) that affect every thing on a page.
* **element.class** selector (`h1.className`) that affect only tags with a specific class.

The `color` and `background-color` properties allow you to specify [colors](https://htmlcolors.com) in a few different ways:

* Hex (`#RRGGBB` or `#RGB`) with hexadecimal numbers (`00` to `FF`) or three digit form (`0` to `F`).
* RGB (`rgb(r, g, b)`) that are in decimal (0-255), or percent (`0%` to `100%`).
* HSL (`hsl(h, s, l)`) that are in percent.
* One of 140 Color names (`red`, `green`, `aliceblue`, `antiquewhite`, ...)

## The JavaScript Template

You can use the `<script>` tag to put JavaScript code right inside the HTML.

You can also use the `src` attribute to separate your code in a separate file. Scripts are parsed as they are encountered in the page. So a script at the top starts running first, and a script at the bottom runs last.

## The DOM

The HTML Document Object Model is a tree of objects.

* `<html>`
  * `<head>`
    * `<title>`
  * `<body>`
    * `<h1>`
    * `<p>`
      * `<b>`

You can use `getElementById` to find a specific element you have labeled with an `id` attribute. The `innerHTML` member variable can be changed to new HTML.

```javascript
var element = document.getElementById('myIdName`);
element.innerHTML = "Let's specify <b>some new content</b> with code."
```

Here is a [handy reference](https://www.w3schools.com/js/js_htmldom_document.asp)
