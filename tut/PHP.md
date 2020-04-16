# php

* Server-side scripting language for dynamic and interactive web pages
* Popular, free 
* PHP7 



// comment

/* multi-line comment */

#### data types
```
string = "Hello";

int = 10;

float = 15.371;

bool = true;

arr = [red,green,blue];
```

```
class myObject {
  
}

$createObject = new myObject();
```

$null = null;

###### *Constants*
* use define function to create constants
* syntax - define(name, value, case-insensitive[defaut: false])
* automatically global unlike variables

`define("const", "my constant")`

##### arithmetic operators
`+` `-` `*` `/` `%` `**`

##### assignment operators
`=` `+=` `-=` `/=` `*=`

##### comparison operators
`==` `!=` `<>` `===` `!==` `<` `>` `<=` `>=` `<=>` 

##### increment/decrement operators
`++$` `$++` `--$` `$--`


##### logical operators
| logic   | operator | 
| ------- |:-------:| 
| and     | and  &&  | 
| or      | or  \|\| |    
| only one| xor      | 
| not true| !        | 

### string operators    
`$concat . $enation`
`$assingnment .= $concatination`

### array operators
? add or not

### conditional assignment
`$ternary = expr1 ? expr2 : expr3`
`$nullCoalescing = expr1 ?? expr2`




##### conditional statements
if (condtion) {}

elseif (condition) {}

else (condition) {}

##### switch statements 
swich (x) {  
  case 1:   
  break;   
  case 2:
  break;  
  default  
}

##### loops
for (condition) {}

foreach ($array as $value) {}

while (condition) {}

do {}  
while(condition) 

# Syntax

```
<?php
// code
?>
```

* case sensitive variable names

# output statments

`echo "no return value - faster";`
`print "return value 1 - one argument";`

### user defined function
```
syntax
function functionName() {
    code to be executed;
}
``



