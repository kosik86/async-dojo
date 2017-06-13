# AsyncDojo

The purpose of this dojo is to practice writing asynchronous loops using promises. 
Also we will practice wrapping 3rd party module (a.k.a blackbox).


## How this program should work ##

Imagine calling the very special library that does all the magic and, for a given input, returns **the number**.
Most importantly, calculating the number takes time - it's (on purpose) asynchronous.

By the way, these numbers here are Fibonacci numbers, but it's not important.

We want to ask our class to build a string representation of those numbers. As simple as concatenating them in the right order.
There are two methods:
* `getSimpleString` calculates every n-th element of the sequence and builds a string with all of them
```javascript
[a, b, c, d]: number[] => f(a) + f(b) + f(c) + f(d): string
// where + is string concatenation
```
* `getRecursiveString` similar to the one above, except for incrementing every n-th element by the value of the previous element 
(and not neccesarily (n-1)-th element of the sequence, it depends what is in the input array)


```javascript
[a, b, c]: number[] => f(a) + f(b)+f(a) + f(c)+f(b)+f(a): string
// where + is string concatenation
```


## What to do

There is one spec file with a list of all unit tests that need to pass. Most of them are disabled, only the first one is enabled.
That is sufficient to make `npm test` fail. 

To follow the best TDD practice you are not allowed to write more code that is needed to make tests passing.
Normally, you're also not allowed to write more unit tests at once - that's why most of them are disabled.
Please follow this TDD master rule and go one by one, never enable more than one test!

Also, feel free to create as many classes as you need. You shouldn't feel limited, just do whatever you can to make your code 
descriptive and pretty.


