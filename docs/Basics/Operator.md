---
sidebar_position: 3
---

## Arithmetic Operators

Arithmetic operators express the arithmetic relationship between data. 

## Logical Operators

Logical operator expression has usages for calculating Boolean data.

## Comparison Operators

Compares its operands and returns a logical value based on whether the expression is true. Operands can be numbers, strings, booleans, object values.

## Assignment Operator

Assignment operator `=` are used to assign a value to a variable or object reference.

## Relational Operators

Relational operators express the relationship between iterable containers and elements. Expressions using relational operators return a boolean value indicating whether the relation holds or not.

It's just a syntactic sugar for the container's built-in functions, you can also use built-in functions instead

### `in`

`in` used to judge whether the element is in the container. it returns a boolean as result.

```
set arr[] : number = [1,2,3,4,5];
print(5 in arr);    # true
```

### `not in`

`not in` is the inverse operation of in, if the element is not in the specified container, it will return true

```
set arr[] : number = [1,2,3,4,5];
print(6 not in arr);    # true
```

## Conditional Operator

The conditional operator is the ternary operator. It is an expression template that returns the corresponding content according to the boolean value returned by the condition.

```
(<boolean expression>) ? <true-case value> : <false-case value>;
```
For example,

```
print(((1 > 2) ? 'Yes' : 'No'))   # 'No'
```

## String Operator

String operators are also syntactic sugar for string functions.

### concat operator `+`

This operator is often used for string concatenation. When the left and right sides of this operator are strings, the concatenation operation is performed. If one side is not a string, it will be implicitly converted before concatenation.

```
set str1, str2, str3:string = 'abc', 'def';
print(str1 + str2); # 'abcdef'
print(str2 + str3); # 'abc', The str3 is null, was implicit convert to empty string
```

## Parentheses and operator precedence

Operators and parentheses have priority. When a statement or expression is executed, the execution order will be adjusted according to a rule operator. This rule is called `precedence`.
