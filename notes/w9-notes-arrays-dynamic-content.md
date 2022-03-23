# Week 9: Arrays and Dynamic Content

## Review

Basic data types:

- `number`
- `string`
- `boolean`

Declare variables:

| type    | scope  | example                           |
| :------ | :----- | :-------------------------------- |
| nothing | global | `pi = 3.14159;`                   |
| `var`   | local  | `var i = 0;`                      |
| `let`   | block  | `for (let i = 0; i < 10; i++) {}` |
| `const` | block  | `const ONE = 1;`                  |

- `var` and nothing are used in all browsers before 2015 (ancient history).
- Generally, use `const` (immutable) to declare variables.
- Use `let` if the variable needs to change (mutable).
- It's bad practice today to use `var` or nothing to declare variables.

Basic control structures:

```javascript
let value1 = 1;
let value2 = 2;

// Check if the numbers are not equal.
if (value1 != value2) {
    console.log("The values are not equal.");
}

// Print the numbers 0 to 9.
for (let i = 0; i < 10; i++) {
    console.log(i);
}
```

Accessing the DOM:

HTML Code:

```html
<p id="someElement"></p>
```

Javascript:

```javascript
const e = document.getElementById('someElement');
if (e) {
    e.innerHTML = "New <b>HTML</b> content."
}
```

Functions:

```javascript
function square(x) {
    return x*x;
}

console.log("The square of 2 is " + square(2).toString());
```

## Arrays

- [JS Arrays](https://www.w3schools.com/js/js_arrays.asp)
- [JS Array Methods](https://www.w3schools.com/js/js_array_methods.asp)
- [JS Array Sort](https://www.w3schools.com/js/js_array_sort.asp)
- [JS Array Iteration](https://www.w3schools.com/js/js_array_iteration.asp)
- [JS Array Const](https://www.w3schools.com/js/js_array_const.asp)
