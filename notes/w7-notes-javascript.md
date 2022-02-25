# Week 5 -- Computability

## Part 2: What makes a program?

**Memory, Comparison, Jump**

If a language supports changing memory, a conditional branch, moving/jumping to a different portion of memory, and comparison, it is Turing Complete. Consider a [one instruction set computer](https://en.wikipedia.org/wiki/One-instruction_set_computer) SUBLEQ.

```c++
Instruction subleq(a, b, c)
    Mem[b] = Mem[b] - Mem[a]
    if (Mem[b] <= 0)
        goto c
```

**So what do computers do?**

Fetch, Decode, Execute.

## Example Program

```javascript
// A function has a name, arguments, and a block of statements
function isOdd(x) {
    if (i & 1)
        return true;
    else
        return false;
}

// Variables store information
var numOdd = 0
var numEven = 0

// Control structures allow us to run certain code, or to loop over them.
for (var i = 0; i <= 100; i++) {
    if (isOdd(i))
        numOdd++
    else
        numEven++
}

// Print some strings to the console.
console.log("The number of odd numbers is " + numOdd.toString());
console.log("The number of even numbers is " + numEven.toString());
```

## Data Types

Literals:

- `string`: a sequence of 1 byte character codes in UTF-8.
- `number`: a 64-bit floating point number. They may also represent integers if they do not have a decimal point or exponent.

Data Types:

- `var`: a variable that stores a value in memory.
- `class`: a way to declare a group of:
  - **member variables**
  - **member functions**
- A `var` may store an **instance** of a `class`.
  - `var s = "hello"` places an instance of a `string` into the variable `s`.
  - `var i = 12345` places an instance of a `number` into the variable `i`.
- `function`: a block of JavaScript commands that may take arguments

It's useful to think that any value in JavaScript is a kind of **object**.

## Control Structures

Control structures allow the program

* block `{}`
* `if`
* `while`
* `for`
