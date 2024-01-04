# 0x00. ES6 Basics

## General Learning Objectives :scroll:

- What ES6 is
- New features introduced in ES6
- The difference between a constant and a variable
- Block-scoped variables
- Arrow functions and function parameters default to them
- Rest and spread function parameters
- String templating in ES6
- Object creation and their properties in ES6
- Iterators and for-of loops

## Tasks

- Task 0 - Modify
  - function taskFirst to instantiate variables using const
  - function taskNext to instantiate variables using let

- Task 1 - Given what you’ve read about var and hoisting, modify the variables inside the function taskBlock so that the variables aren’t overwritten inside the conditional block.

- Task 2 - Rewrite the following standard function to use ES6’s arrow syntax of the function add (it will be an anonymous function after)

- Task 3 - Condense the internals of the following function to 1 line - without changing the name of each function/variable.
  - Hint: The key here to define default parameter values for the function parameters.

- Task 4 - Modify the following function to return the number of arguments passed to it using the rest parameter syntax

- Task 5 - Using spread syntax, concatenate 2 arrays and each character of a string by modifying the function below. Your function body should be one line long.

- Task 6 - Rewrite the return statement to use a template literal so you can the substitute the variables you’ve defined.

- Task 7 - Notice how the keys and the variable names are the same?
Modify the following function’s budget object to simply use the keyname instead.

- Task 8 - Rewrite the getBudgetForCurrentYear function to use ES6 computed property names on the budget object

- Task 9 - Rewrite getFullBudgetObject to use ES6 method properties in the fullBudget object.

- Task 10 - Rewrite the function appendToEachArrayValue to use ES6’s for...of operator. And don’t forget that var is not ES6-friendly.

- Task 11 - Write a function named createEmployeesObject that will receive two arguments:
  - departmentName (String)
  - employees (Array of Strings)

- Task 12 - Write a function named createReportObject whose parameter, employeesList, is the return value of the previous function createEmployeesObject.

- Task 13 - Write a function named createIteratorObject, that will take into argument a report Object created with the previous function createReportObject.
  - This function will return an iterator to go through every employee in every department.

- Task 14 - Finally, write a function named iterateThroughObject. The function’s parameter reportWithIterator is the return value from createIteratorObject.
