## The Declaration
```
<Function Name> (<Parameter List>) : <Return Type> {
    <Function Body>
}
```

And the `<Parameter List>` is `para1:type1, para2:type2...`

For example, the summary calculator function may be 
```
sum (a:number,b:number):number{
    return a + b;
};
```

If the function does not return anything, The return type should be `void`

```
print_number (num:number):void{
    # function body
}
```

Also, function has none parameter list, the parameter list should be empty.

```
print_menu ():void{
    # function body
}
```

## Function calls

Functions can be called by their name and passed in parameters.

```
<function name>(<params>);
```

For example,
```
sum(a:number, b:number):number{
    return a + b;
}

set result : number = sum(4,5); 
```
The example program calls the sum function and uses a variable to receive the return value of the function.

The function call itself is very simple. But there are still some caveats.

First, don't call functions in a loop. For example, in the following example, `f1` calls `f2`, and `f2` also calls `f1`, which will cause the program execution stack to explode.

```
f1():void{
    f2();
}

f2():void{
    f1();
}

# The heap-stack in memory will explode!
```

Similarly, you should be careful when using recursion, and set a stop condition for recursion to prevent stack explosion.

## Function Overloading

If there are multiple functions with the same name, but they all have different parameter lists, then the usage is called function overloading.

For example, we define a function called `sum`, For the sum of two strings, the value is the concatenation of the two strings. Arithmetic sum if it is the sum of two numbers.

```
sum(str1:string, str2:string):string{
    return str1.concat(str2);
}

sum(num1:number, num2:number):number{
    return num1 + num2;
}

sum('a', 'b');    # return 'ab'
sum(1, 2);        # return 3
```