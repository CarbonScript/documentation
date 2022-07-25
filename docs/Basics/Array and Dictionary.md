---
sidebar_position: 7
---

## Array

Arrays are linear storage structures that can be allocated in memory.Unlike other languages, Carbon Script's array declaration can change not only the elements of the array, but also the length of the array.

The array is subscripted with numbers, and the array element at the corresponding position can be accessed through the subscript.As in other languages, the subscripts of arrays start with 0.

The relationship between array subscript and array length is
```
array's length = maximum subscript - 1
```

Declaring an empty array can be in the following way:

```
set <array name>[] : <datatype>;
```

Example

```
set arr[] : number;
```

Array declared like this contains no elements.

If you want to declare an array with initial values, you can use the following way:

```
set <array name>[] : <datatype> = [elem1,elem2,elem3,elem4,....];
```

Example:
```
set arr[] : number = [19,25,7,14];
```

An array declared this way has a length equal to the number of initial elements. Like the above example, the length of the array is 4

To access array elements, you can use the following way:

```
<array name>[<index>];
```

For example, if you want to access the 5th sorted array in the array, the expression should look like this:
```
arr[4]
```

**But if you try to access the index beyond the subscript range of the array, no error will be reported, but null will be returned**. A warning is thrown if the access is at compile time. There will be no prompts at runtime.

Arrays has its type, which is the type provided at declaration time. It can only store elements of the corresponding type. An error occurs if other types of elements are stored. So before accessing an array element, it's better to check if it's null.

## Dictionary

A dictionary is a non-type storage structure. That is to say, data of different types can be stored in the same dictionary. Unlike arrays, dictionaries store a set of key-value pairs. where the keys are of type string and the values can be of any type. Keys cannot appear repeatedly in the same dictionary.

## Mixed Usage and higher-Order structure

## Iterable and Traverse

## Functions

