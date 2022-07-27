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

State a empty dictionary to use the following ways:

```
set <dictionary name>{} ;
```
For example:

```
set data{};
```

If you need to bring your initial value, you can use the following ways:

```
set <dictionary name> {} = {
    <key1>:<datatype> = <value1>,
    <key2>:<datatype> = <value2>,
    <key3>:<datatype> = <value3>,
    ......
};
```

For example,

```
set student_info {} = {
    "name":string = "Bob",
    "age":number = 20,
    "sex":boolean = true,
};
```

In this way, we declared a dictionary with initial value.

If you need to access the dictionary element, the method is basically the same as that of the array elements. The difference is that the index is a string of the key name.

```
<dictionary name>[<key>];
```

For the above example, get age from dictionary.

```
print(student_info["age"]);
```

Similar to the array, when accessing the corresponding value of an unwanted key, a warning will be proposed during the compilation period, and `null` will be returned at runtime, and error will never be reported.


## Iterable and Traverse

Arrays and dictionaries are all iterable. That is able to be traveled by `foreach` block.

Generally speaking, arrays can traverse through indexes.

```
for (set i : number = 0; i < len(arr); i++){
    print(numToStr(arr[i]));
}
```

Of course, you can also traverse array with `foreach`.

```
foreach (item in arr){
    print(numToStr(item));
}
```

Item is the element of the corresponding arr per traversal.

The effects of the two traversal ways are same. The output order of the traversal is sorted according to the array indexes.

But for dictionaries, because the key value of the dictionary will not be sorted, the dictionary can only be traversed with `foreach`.

And, in the traversal results, the output order of each item is **uncertain**

```
foreach (item in arr){
    print(toString(item));
}
```

The item output order in dictionary is uncertain.

However, there is also a way to sort the dictionary before the output dictionary results with function `sortDictionary`. In this way, the output result is arranged in each of which is arranged in the key name of the key name.

## Some Functions

In order to facilitate the use and management of array and dictionary, Carbon Script provides some commonly used built -in functions.

### arrCount(arr:any[]):void

### dicCount(dic:{}):void

### sortDictionary(dic:dictionary):void

### arrClean(arr:any[]):void

### dicClean(dic:{}):void