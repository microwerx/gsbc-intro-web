# Week 7: Coding in JavaScript

## Developer Tools

Knowing how to use the developer tools is absolute must.

- Safari: Enable "Develop Menu" by adjusting preferences. OPT-CMD-I
- Chrome: CTRL-SHIFT-I

## Printing hello world

In the JavaScript console, you may type:

```javascript
console.log('hello, world')
```

This command will give a dialog box:

```javascript
alert('hello, world')
```

These are examples of statements.

## Arithmetic

We can use the symbols `+-*/` for addition, subtraction, multiplication, and division. We can use `()` parenthesis to group operations together if we need to control the **order of operation**.

```javascript
> 3 + 4
> 3 * 4 + 2
> 2 + 3 * 4
> (2 + 3) * 4
> 5 / 2
> 5 / 2 | 0
```

The last command uses `| 0` which applies binary or to a number. This is an effective way to do integer division.

Here are some binary operators:

```javascript
1 | 2 // Bitwise OR
1 & 2 // Bitwise AND
1 ^ 2 // Bitwise XOR
~(0)  // Bitwise NOT
~(1)  // Bitwise NOT
```

Here are some boolean operators:

```javascript
true && false // Logical AND
true || false // Logical OR
true == false // Logical Equality
true != false // Logical Inequality
true === true // Strict equality
true === 1    // Strict equality
```

The last `===` checks if the types are the same and if they are the same type.

Lastly strings are composed with the `""` and `''` characters. They must match. Strings can also use some math operators.

```javascript
"hello"
"hello" + "world"
"hello" + 4
"hello" * 4
"4" == 4
"4" === 4
"4" === "4"
parseFloat("4.5")
parseInt("4.5")
```

Integers can range from -2147483648 to +2147483647. Floats have about 15 digits of accuracy and represent numbers +/- 1.7 x 10^308.

## Variables

We may store values as variables. Another way of thinking about this is that we are assigning a value to an **identifier**. An identifier starts with a letter character (_, a-z, A-Z) and contains any combination of letters, numbers, or underscore characters. Identifiers never start with numbers.

There are different styles of naming variables:

- `PascalCase` (commonly used for constants or Class names)
- `camelCase` (commonly used in JavaScript)
- `snake_case` (commonly used in SQL)
- `kebab-case` but this is only for CSS names or URLs.
- `ALL_CAPITAL_LETTERS` (Like snake case, but for constants)

Let's do Pythagorean' Theorem:

```javascript
console> a = 3
console> b = 4
console> c = Math.sqrt(a*a + b*b)
```

## Functions

We have seen some examples of functions. We could rewrite Pythagorian Theorem as a function:

```javascript
function pythagorus(a, b) {
    return Math.sqrt(a*a + b*b)
}

console.log(pythagorus(3, 4))
```

There's a better way of writing functions however that makes them less error prone.

For example:

```javascript
console.log(pythagorus("three", "four"))
```

By using a certain kind of comment.

```javascript
/**
* @param a {number} The length of a side of a triangle.
* @param b {number} The length of the opposite side of a triangle.
* @return {number}  The length of the diagonal of the triangle.
*/
function pythagorus(a, b) {
    return Math.sqrt(a, b)
}
```

## Arrays

We often want to avoid code like this:

```javascript
function getAnimalKind(itemChoice) {
    if (itemChoice == 0) return "Reptiles";
    if (itemChoice == 1) return "Mammals";
    if (itemChoice == 2) return "Amphibians";
    return "Unknown";
}
```

We could put these items in an array instead using square brackets `[]`:

```javascript
const animalKinds = [ "Reptiles", "Mammals", "Amphibians" ];

var itemChoice = 1;
var item = animalKinds[itemChoice];

// You can iterate (i.e. visit each element) through a list.
for (var kind in animalKinds) {
    console.log(kind);
}

// You can change the content by using the bracket notation.
animalKinds[0] = "Birds";
```

An array allows us to use an integer **index** to look up an item in a list. The index is zero-based, meaning that 0 is the first element, 1 is the second element, and so on. If the array has N elements, then the last index is `N-1`.

You can call `animalKinds.length` to get the size of the array. You want to avoid reading/writing to elements outside the array or you could cause your program to fail (or throw an error).

## Structured Programming

The term structured programming refers to organizing your code with control structures like `if`, `for`, `while`, etc.

```javascript
// Adjust the page element 'age' by classifying the input as text.
var age = 10;
ageNode = document.getElementById('age');
if (age < 13) {
    ageNode.innerHTML = "Just a kid!";
} else if (age < 20) {
    ageNode.innerHTML = "Teenager!";
} else if (age >= 65) {
    ageNode.innerHTML = "Older";
} else {
    ageNode.innerHTML = "Adult age";
}
```

We can use `for` loops to iterate through a problem. For example: factorial.

```javascript
let numbers = [ 5, 10, 22, 11, 13 ];
let sum = 0;
for (let i = 0; i < numbers.count; i++) {
    sum += numbers[i];
}
let average = sum / numbers.count;
console.log("The sum of the numbers is " + sum.toString());
console.log("The average of the numbers is " + average.toString());
```

We can choose to keep doing something with a `while` loop.

```javascript
let done = false;
let loops = 0;
while (!done) {
    let x = Math.random();
    if (x > 0.98) {
        done = true;
    }
    loops++;
}
console.log("The while loop completed " + loops.toString() + " iterations");
```

There is a `do...while` loop that guarantees at least one execution:

```javascript
let done = false;
let loops = 0;
do {
    let x = Math.random();
    if (x > 0.98) {
        done = true;
    }
    loops++;
} while (!done)
console.log("The do...while loop completed " + loops.toString() + " iterations");
```
