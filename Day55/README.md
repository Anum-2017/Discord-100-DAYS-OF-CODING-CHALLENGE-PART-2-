# Day-55 Task:

Read the following Articles and Code along with it:

## [Data Types in JavaScript](https://javascript.info/types)
 
 There are 8 basic data types in JavaScript.
## 7 primitive data types:
    -> number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
    -> bigint for integer numbers of arbitrary length.
    -> string for strings. A string may have zero or more characters, there’s no separate single-character type.
    -> boolean for true/false.
    -> null for unknown values – a standalone type that has a single value null.
    -> undefined for unassigned values – a standalone type that has a single value undefined.
    -> symbol for unique identifiers.
    
## And one non-primitive data type:
   -> object for more complex data structures.
   
## The typeof operator allows us to see which type is stored in a variable.
   -> Usually used as typeof x, but typeof(x) is also possible.
   -> Returns a string with the name of the type, like "string".
   -> For null returns "object" – this is an error in the language, it’s not actually an object.


## [Interaction: alert, prompt, confirm in JavaScript](https://javascript.info/alert-prompt-confirm)

We covered 3 browser-specific functions to interact with visitors:

-> alert : shows a message.
-> prompt : shows a message asking the user to input text. It returns the text or, if Cancel button or Esc is clicked, null.
-> confirm : shows a message and waits for the user to press “OK” or “Cancel”. It returns true for OK and false for Cancel/Esc.

