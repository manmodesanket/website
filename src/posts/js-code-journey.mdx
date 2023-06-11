---
title: Journey of JavaScript code.
date: 2023/6/23
description: Journey of JavaScript code.
tag: web development
author: You
---

There are 3 phases in which JS code is executed.

* Parsing
    
* Compilation
    
* Execution
    

## Parsing

In parsing phase, code is broken down into tokens and syntax parser converts these tokens into abstract syntax tree(AST).

AST is used by bytecode generator to form byte code which in turn is used by interpreter to run the code.

There are two types of parsers and they are lazy parsers and eager parser.

Eager parser does following things:

* Used for parsing functions we want to compile
    
* Builds AST
    
* Builds Scope
    
* Finds all syntax errors
    

Lazy parser does following things:

* Used for skipping functions we do not want to compile
    
* Find a restricted set of errors
    

To give an example, IIFE would be parsed by eager parser and other functions are parsed by lazy parser. Lazy parser parses function body of a function and when that function is invoked it is eager parsed and compiled later.

## Compilation

In compilation phase, code compilation is done, of course. But there is more to it. JavaScript runtime has their own JIT (Just in Time) compilation implementation.

### JIT (Just in Time) Compilation

What JIT does is that once code starts running, it is able to optimize it at runtime.

Every modern browser and runtime uses their own JIT compiler. Unlike some other language like java, where compilation is done ahead of time, in JS the compilation is done at the time of execution.

JavaScript was Interpreted language by design. Interpreter is something which executes the code line by line without knowing what what will happen in the next lines to come.

Generally modern browsers will have two compilers a base line compiler and a optimizing compiler. If some part of code is getting run repeatedly, it will be passed to optimizing compiler which will optimize that code for faster running. Optimizing compiler uses previously seen type information (don't change type!)

![jsengine.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1639500943152/nJ7nfKD_e.png align="left")

Reused functions are marked as "hot"

%[https://giphy.com/gifs/usnationalarchives-skateboarding-archivesgif-surefootin-Sr8dN4GfSwsbHW4Rap] 

## Execution

Compilation and execution phase happen hand in hand really. When Interpreter is trying to execute the code, line by line, compiler is also trying to optimize the code at the same time(JIT for you!)

Execution is done in two phases:

* Memory Allocation Phase
    
* Code Execution Phase
    

```plaintext
var n = 2; // 1

function square(n) { // 2
  var ans = n * n;  // 3
  return ans; // 4
} // 5

var squareofTwo = sqaure(n); // 6
```

Let's have a look at above code example, In memory execution phase memory is allocated to variables and functions. And in this case we have two variables n, squareofTwo and a function square. Variables will be assigned value of undefined and function will be allocated memory.

Now the state of variables are,

```plaintext
num = undefined
squareofTwo = undefined
```

### Execution Context

Memory allocation in above example is happening in global execution context. Whenever a new function call is made new execution context is created. In above example, whenever function square will be called every time new execution context will be created with new memory allocation phase and code execution phase.

Now moving forward,

* In code execution phase, on line 1, value 2 is assigned to variable. Line 2, 3, 4 are skipped.
    
* On line 6 call to the function square will be made and new execution context will be created.
    
* Memory will be assigned to variable ans with value undefined and in code execution phase value of ans will be calculated and assigned.
    
* Line 4 will return the control to the global execution context with value 4 which will be assigned to variable squareofTwo.
    

And that is how JavaScript code is executed. This example is pretty small but you can apply this train of thoughts to any code snippet and you will have a good mental model of the code execution.

The talks and article I referred are mentioned below

* [Parser](https://youtu.be/Fg7niTmNNLg)
    
* [Compilation](https://youtu.be/p-iiEDtpy6I)
    
* [Execution](https://youtu.be/iLWTnMzWtj4)
    
* [JIT](https://blog.bitsrc.io/the-jit-in-javascript-just-in-time-compiler-798b66e44143)
    

I hope it was a good read. Thanks for reading! Until next time 👋