---
sidebar_position: 5
---

Carbon Script has these basic data types:

+ Boolean Type,indicate false or true : `boolean`
+ String, consist of char sequence : `string`
+ Number, include integer and double number in 8 bytes : `number`

There is special data types:  `void`

`void` expresses: "Not any type", it is often used in the function return type, and it is used to express this function without returning any value. But it cannot be used to declare variable's data type.

## NaN

`NaN` is of type number. It means "illegal number", and the result of arithmetic operation of any number and NaN equals to `NaN`

## null

`null` does not belong to any of the above types, nor does it belong to an instance of any object. it means `empty value`.

## Type Convert

The conversion of data types is divided into explicit conversion and implicit conversion. Explicit conversions are performed with the help of functions and return values, while implicit conversions are not required. Note: Implicit conversions can only occur between underlying data types.

The specific implicit conversion rules are as follows:

+ boolean <-> string

    ```
    false   <->  'false'
    true    <->  'true'
    ```

+ number -> boolean
    ```
    Positive number                 ->  true
    NaN, zero and negative numbers  ->  false
    ```
+ boolean -> number
    ```
    true    ->  1
    false   ->  0
    ```

+ string <-> number

    Strings in legal numeric form can be directly converted to numbers
    Likewise, numbers can also be converted to corresponding strings.

    But note that if the string is not a legal digital form, such as English letters, Chinese, etc., it will be converted to the number NaN

    For example,
    ```
    'abc0123456'    ->  NaN
    ```

    Also note that when strings are converted to numbers, precision may be lost. Also, if the number represented by the string exceeds the range of a 64-bit floating point number, the converted number will become NaN

    For example,
    ```
    # lost precision
    '0.123456789123456789123456789' -> 0.12345678912345678
    # Out of range
    '9999999999999999999999999'     -> NaN
    ```

+ null -> string
  
    When null is implicitly converted to a string, an empty string is returned.
    ```
    null    ->  ''
    ```

+ null  -> number

    When null is converted to a number, NaN is returned
    ```
    null    ->  NaN
    ```

+ null  -> boolean

    When null is converted to a boolean value, it is always return to false
    ```
    null    ->  false
    ```
