The declaration of function:
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

Also, function has none parameter list, the parameter list should be `void`.

```
print_menu (void):void{
    # function body
}
```