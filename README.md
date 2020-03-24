# Main Topics

1. Clean Code with JavaScript
2. Clean Code with Functional Programming
3. Modules in JavaScript
4. Design Patterns and Principles
5. Testing
6. Error Handling

## 1 Clean Code with JavaScript

1. Clean variables
2. Lexical scope and let
3. Clean functions
4. All about this
5. Clean objects and classes
6. Using a linter

### 1.1 Clean variables

1. Use meaningful variable names
2. Variable names should be memorable
3. Favor descriptive names over short ones
4. Avoid unnecessary context
5. Be consistent with naming conventions

### 1.2 Lexical scope and let

1. How JavaScript engine searches for variables
   A. Where JavaScript engine look for the requested variable
   In the current scope and all enclosing scopes
   B. Where is variable defined
   Always favor strict mode
2. Functions vs block scope
3. let vs var

### 1.3 Clean functions

1. How to write cleaner functions
   A. Single Responsibility (DOT)
2. How to work with arguments and return values in an optimal way
   A. Reduce the number of arguments => If arguments > 3 then ask the following question:
   Is the function accomplishing a specific task? if not split it into more than 1 function
3. Avoid flags
4. Avoid callbacks
5. Use Object.assign() or spread operator for default arguments

### 1.4 All about this

1. How to understand the content of this
   A. Function definition does not matter
   B. Call site : from where the functions is called
   C. Variables declared with let are not part of the global object
2. How to avoid buggy code regarding this
