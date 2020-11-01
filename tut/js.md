# JavaScript

Change the behaviour of the webpage.

recommended to use [let insted of var](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables#The_difference_between_var_and_let) dynamically typed

# JS

`// comment`

```
/*
multi-line comment
*/
```

## Data Types

```
let variable;

let string = "Hello";

let int = 10;

let float = 15.371;

let bool = true;

let arr = [red,green,blue];

let  = { name : 'Spot', breed : 'Dalmatian' };

// constant
const constant = 9;
```

### arithmetic operators

`\+` `\-` `\*` `/` `%` `**`

### logical operators

logic    | operator
-------- | :------:
and      |  and &&
or       |   or \   | \ |
only one |   xor

### conditional statements

if (condtion) {}

elseif (condition) {}

else (condition) {}

### switch statements

swich () {<br>
case 1:<br>
break;<br>
default<br>
}# JS

### loops

<!-- for (condition) {} while (condition) {} do {} while(condition) -->

 for (statement 1; statement 2; statement 3) { // code block to be executed }

for (x in object) { text += oblect[x]; }

for (variable of iterable) { // code block to be executed }

while (condition) { // code block to be executed }

do { // code block to be executed } while (condition);


var operand1 = Math.floor(Math.random() * 101);
var operand2 = Math.floor(Math.random() * 101);
var theSum = operand1 + operand2;

function addIntegers() {
  operand1 = Math.floor(Math.random() * 101);
  operand2 = Math.floor(Math.random() * 101);
  theSum = operand1 + operand2;
  while (theSum > 100){
  	if (operand1 >= 50){
  		operand2 =  Math.floor(Math.random() * 51);
    }
  	else {
      operand2 =  Math.floor(Math.random() * 101);
    }
    theSum = operand1 + operand2;
  }
  document.getElementById("op1").innerHTML = operand1;
  document.getElementById("op2").innerHTML = operand2;
  //document.getElementById("answer").innerHTML = result;

  console.log(operand1.toString() + " + " + operand2.toString());
  console.log(result);
}
