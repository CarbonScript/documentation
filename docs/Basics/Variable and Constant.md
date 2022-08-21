---
sidebar_position: 1
---

## Declaration of Variable and Initial Value.

If you want to declare multiple variables at once, you can only declare multiple variables of the same data type, and it is not supported to declare variables of multiple mixed types at once.

For the naming of variables, only English letters or underscores can be used as the beginning, and keywords cannot be used.

Variables can be declared using the keyword `set`. This is a keyword dedicated to declaring variables.

### Declaration of single variable 

With initial value

```
set <variable name> : <datatype> = <value>;
```
Example:
```
set example : string = "example value";
```

Or without initial value

```
set <variable name> : <datatype>;
```

Example:
```
set example : string;
```
If the variable has no initial value, It will be automatically assigned the default value `null`;

### Declaration of more variables:

If you want to declare multiple variables of the same type at once, without initial values, you can do this

```
set <var1 ,var2, var3,...> : <datatype>;
```
Example:
```
set a1,a2,a3 : string;
```

In this way, we have created three variables `a1`, `a2`, `a3`, and their values are all `null`.

If you want to have an initial value, you can do this

```
set <var1 ,var2, var3,...> : <datatype> = <value1, value2, value3,...>;
```

The initial values of the variables can be listed in order.In this way, the value of the variable `var1` is `value1`, and the value of the variable `var2` is `value2`, and so on.

Example:
```
set a1,a2,a3:string = "alice","bob","john";
```

But there are exceptions. If you want in the above example, in addition to `a1`, `a3`, these two variables have initial values, and `a2` does not have initial values, then what should you do? In fact, it is very simple, just set the initial value of `a2` to `null`.

:::caution

If multiple variables are declared, and you want to give initial values for them, the count of initial values should be equal to variables. Otherwise, the rest of the variables will be set to null

:::

Such as this example:
```
set a1,a2,a3,a4:string = "alice","bob";
```
The count of variables does not match values.
So the `a3`,`a4` will be assigned `null`.

## Declaration of Constant.

In contrast to variables, constants cannot be modified after they are declared. Also, constants must be assigned an initial value when they are declared, not null.
All constants must be determined at compile time or before compilation. An error occurs if the constant is found to be modified at runtime.

The naming convention for constants is the same as for variables.

Constants can be declared using `set const`,very similar to the declaration of a variable. The only difference is that an initial value must be assigned.

### Declaration of single variable 

This is the right way to do

```
set const <constant name>:<datatype> = <initial value>;
```

For example,

```
set const example : string = "This is a constant.";
```

Of course, a declaration without an initial value throws an error

```
set const example : string; # WRONG EXAMPLE
```

### Declaration of more variables:

Similar to declaring multiple variables, the only difference is that these variables must be given initial values.

```
set <var1 ,var2, var3,...> : <datatype> = <value1, value2, value3,...>;
```

For example,

```
set const a1, a2, a3 : string = "constant 1", "constant 2", "constant 3";
```

That is, the count of variables must be exactly equal to the count of initial values.

Otherwise, the remaining constants will be set to null, but an error will occur as constants cannot be null.

```
set const a1, a2, a3 : string = "constant 1", "constant 2", "constant 3";
```

Like this,

```
set const a1, a2, a3 : string = "constant 1", "constant 2";
```

The `a3` has no corresponding initial value and will be automatically assigned to null, so an error will be reported.
