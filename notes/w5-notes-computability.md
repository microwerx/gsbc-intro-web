# Week 5: Computability

## Part 1: CS Fundamentals

### Computer science is possible because of the attributes of God.

God *cannot* lie. It's an **immutable** property.

> (Hebrews 6:17-18) "Wherein God, willing more abundantly to shew unto the heirs of promise the immutability of his counsel, confirmed it by an oath:  <sup>18</sup>That by two immutable things, in which **it was impossible for God to lie**, we might have a strong consolation, who have fled for refuge to lay hold upon the hope set before us:"

and

> "**God is not a man, that he should lie**; neither the son of man, that he should repent: hath he said, and shall he not do it? or hath he spoken, and shall he not make it good?" (Numbers 23:19)

God's word is truth.

> (John 17:17) "Sanctify them through thy truth: thy word is truth."

We depend on it being true for our salvation.

> (1 Corinthians 15:17) "And if Christ be not raised, your faith is vain; ye are yet in your sins."

### So what is truth?

> (John 18:37-38) "Pilate therefore said unto him, Art thou a king then? Jesus answered, Thou sayest that I am a king. To this end was I born, and for this cause came I into the world, that I should bear witness unto the truth. Every one that is of the truth heareth my voice.  <sup>38</sup>Pilate saith unto him, What is truth? And when he had said this, he went out again unto the Jews, and saith unto them, I find in him no fault at all."

* In computer science, we use the value 0 to represent false, off, disabled, etc and we use 1 (and non-zero numbers), to represent true, on, enabled, etc.
* We call these **boolean** values. They are named after [George Boole](https://en.wikipedia.org/wiki/George_Boole) who founded Boolean Algebra (1847).
* Claude Shannon's Switching Algebra (1938)

[**Boolean Algebra**](https://en.wikipedia.org/wiki/Boolean_algebra)

Let's use A to represent a boolean value, 0 or 1. Let's also use B to represent a boolean value, 0 or 1.

**Negation**

**NOT** A means that if A is true, then "NOT A" is false. If A is false, then "NOT A" is true.

$$\neg A$$

```js
let A = false
if (!A) {
    console.log("A is false")
}
```

**Conjunction**

A **AND** B means that if A is true and B is true, then this expression is also true. It is false if either A or B is false. We use a *wedge* symbol to write this.

$$A \wedge B$$

**Disjunction**

A **OR** B means that if either A is true or B is true, then this expression is also true. Both A and B have to be false for this expression to be false. We use a *vee* symbol to write this.

$$A \vee B$$

**Truth Tables**

|   A   |   B   | $\neg A$ | $\neg B$ | $A \wedge B$ | $A \vee B$ |
| :---: | :---: | :------: | :------: | :----------: | :--------: |
|   0   |   0   |    1     |    1     |      0       |     0      |
|   0   |   1   |    1     |    0     |      0       |     1      |
|   1   |   0   |    0     |    1     |      0       |     1      |
|   1   |   1   |    0     |    0     |      1       |     0      |

**Binary and Hexadecimal Numbers**

| Decimal | Binary | Hexadecimal |
| :-----: | :----: | :---------: |
|    0    |  0000  |    0x00     |
|    1    |  0001  |    0x01     |
|    2    |  0010  |    0x02     |
|    3    |  0011  |    0x03     |
|    4    |  0100  |    0x04     |
|    5    |  0101  |    0x05     |
|    6    |  0110  |    0x06     |
|    7    |  0111  |    0x07     |
|    8    |  1000  |    0x08     |
|    9    |  1001  |    0x09     |
|   10    |  1010  |    0x0A     |
|   11    |  1011  |    0x0B     |
|   12    |  1100  |    0x0C     |
|   13    |  1101  |    0x0D     |
|   14    |  1110  |    0x0E     |
|   15    |  1111  |    0x0F     |

In base ten, each digit represents a digit between 0 and 9. So we have a "tens" spot, a "hundreds" position, a "thousands" position. Since it's tedious to write 1s and 0s repeatedly (and imagine doing that for 64-bit numbers!), we often use hex to write them--they represent a *nibble*, or 4 bits at a time. So the number 0x6C would be binary 01101100 (0110 and 1100).

A *byte* is typically 8-bits. A *short* (or *word*) is a 16-bit integer. A *int* is 32-bits. A *long long* is normally 64-bits.

Each bit in a binary number represents a power of two.

| Ordinal |  Binary  | Decimal | Hexadecimal |
| ------- | :------: | :-----: | :---------: |
| 1st     | 00000001 |    1    |    0x01     |
| 2nd     | 00000010 |    2    |    0x02     |
| 3rd     | 00000100 |    4    |    0x04     |
| 4th     | 00001000 |    8    |    0x08     |
| 5th     | 00010000 |   16    |    0x10     |
| 6th     | 00100000 |   32    |    0x20     |
| 7th     | 01000000 |   64    |    0x40     |
| 8th     | 10000000 |   128   |    0x80     |

Any decimal number (like 27) can be represented by ensuring the bits add up to the number:

$$ 27 = 16 + 8 + 2 + 1 $$

So the binary number has the 5th, 4th, 2nd, and 1st bits turned on:

$$ 00011011 $$

**Integers**

We can represent positive integers by turning on the right bits. Negative numbers use **two's complement** which means that we count down. So all bits turned on is $-1$ and all bits on but the 1st bit is $-2$, etc.

**Decimals**

Numbers representing decimals or percentages can be represented with binary as well. Let's look at hexadecimal colors and floating point number.

RGB colors says how much to blend red green and blue values to produce the colors you see on your screen. We use 8-bit numbers (0 to 255) where 0 is red all the way off, and 255 is red all the way on. So an integer can be made to represent fractions--just in steps of 1/255 (0.00392156863).

| Hex color | Color   |
| :-------: | ------- |
| `#FF0000` | Red     |
| `#00FF00` | Green   |
| `#0000FF` | Blue    |
| `#00FFFF` | Cyan    |
| `#FF00FF` | Magenta |
| `#FFFF00` | Yellow  |
| `#7FFF00` | Orange  |
|    ...    | ...     |

**Floating-Point Numbers**

**IEEE-754** is a standard that is used to represent many other kinds of decimal numbers. It consists of 1 bit for sign, 8 bits for exponent, and 23 bits for the fraction. A 32-bit number in this format is often called a **float** and a 64-bit number in this format is often called a **double**.

| sign (1-bit) | exponent (8 bits) | fraction (23 bits) |
| :----------: | :---------------: | :----------------: |
|      31      |   30 &ndash; 23   |    22 &ndash; 0    |

| sign (1-bit) | exponent (8 bits) | fraction (23 bits) |
| :----------: | :---------------: | :----------------: |
|      31      |   30 &ndash; 23   |    22 &ndash; 0    |


```
     0 01111100 01000000000000000000000 = 0.15625
```

We can represent the same bits as it would be stored in memory:

```
0011 1110 0010 0000 0000 0000 0000 0000 = 0x3E200000
```

Floating point numbers can accurately represent decimals to ~7 digits (32-bits) or ~16 digits (64-bits). JavaScript uses 64-bit floating point numbers to represent numbers. This type is called a `number`. For speed, it uses integer representations if it's known the values are integers. (`var x = 6 | 0`)

Reference: <https://en.wikipedia.org/wiki/IEEE_754>

**Turing Machines**

There is a device which is capable of computing anything that can be computed. It's called a Turing Machine. It is named after Alan Turing, a British scientist who discovered this theoretical device.

Imagine a tape containing symbols. A tape head points to the current position on the tape and it can move left or right.

Let's look at a simple algorithm. If it reads a blank, or a 1 or 0, it keeps moving to the right. If it sees a blank, it moves left 1 space. While it keeps reading a 1, it turns it into a 0 and moves left. Lastly, if it reads a 0, then it turns it into a 1. Incredible! We have literally just added 1 using simple rules.


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

> Draw a diagram of memory

```js
var numOdd = 0
var numEven = 0
for (var i = 0; i <= 100; i++) {
    if (i & 1)
        numOdd++
    else
        numEven++
}
```

**Limitations of Computers**

>  Is there a mechanical procedure for separating mathematical truths from mathematical falsehoods?

* Is mathematics *complete?*
* Is mathematics *consistent?*
* Is mathematics *decidable*?

Here's a short history:

* David Hilbert and Wilhelm Ackermann's Entscheidungsproblem (1928)
* Gödel's incompleteness theorems (1931)
* Tarski's undefinability theorem (1933)
* Alonzo Church's Lambda Calculus (1935)
* Alan Turing's Turing Machines (1935)
* Alonzo Church and Alan Turing Church-Turing Thesis (1936)

The halting problem:

This program does not halt:

```javascript
while (true) {
    // endless loop
}
```

This program halts:

```javascript
console.log("hello, world");
```

Christopher's Strachey's Simple Program (1965)

```python
def g():
    if halts(g):
        loop_forever()
```

The idea is that there is a function `halts(f)` which returns true if `f` halts and false if it does not. In this case, `g` does the opposite and creates a contradiction.

The implication is that you cannot write a computer program to decide that another computer program will halt if it is a nontrivial program.

## Summary

Computer science is possible because of the attributes of God. But while we can enjoy the richness of writing computer programs, we should not think that God is a form of computer--because he does the end from the beginning.

> "<sup>5</sup> To whom will ye liken me, and make me equal, and compare me, that we may be like?  <sup>6</sup> They lavish gold out of the bag, and weigh silver in the balance, and hire a goldsmith; and he maketh it a god: they fall down, yea, they worship.  <sup>7</sup> They bear him upon the shoulder, they carry him, and set him in his place, and he standeth; from his place shall he not remove: yea, one shall cry unto him, yet can he not answer, nor save him out of his trouble.  <sup>8</sup> Remember this, and shew yourselves men: bring it again to mind, O ye transgressors.  <sup>9</sup> Remember the former things of old: for I am God, and there is none else; I am God, and there is none like me,  <sup>10</sup> **Declaring the end from the beginning, and from ancient times the things that are not yet done, saying, My counsel shall stand, and I will do all my pleasure**:  <sup>11</sup> Calling a ravenous bird from the east, the man that executeth my counsel from a far country: yea, I have spoken it, I will also bring it to pass; I have purposed it, I will also do it." (Isaiah 46:5-11)
>
