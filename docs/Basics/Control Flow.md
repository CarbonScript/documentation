
## if-else Block
Here, the `if-else block` is the same as in most other C-like programming languages.

Its form is as follows.
```
if (<expression-0>){

}
else if (<expression-1>){

}
#......
else if (<expression-n>){

}
else{

}
```

Its effect is to judge the expression of each block one by one. If the result of this `expression` is true, the content in the `if block` is executed immediately. Then the remaining `if blocks` are no longer judged and executed.

In this example, if `expression-0` is determined to be true, the statement in this `if block` will be executed, and the following `expressions-1` to `expression-n` will be skipped regardless of whether they are true or not.

The `else block` is not necessary. If `expression-0` to `expression-n` are not established, and the else block exists, the content in the else block is executed.

## switch-case Block

`switch-case block` is a jump table and behaves in the same way as other C-like languages.

```
switch case (<expression>){

    case <value-1>:
        # body
    break;

    case <value-2>:
        # body
    break;

    # ......

    case <value-n>:
        # ...
    break;

    default:
        # ...
    break;

}
```
It will be compared with the possible values value-0 to value-n from top to bottom according to the return value of expression. 

If there is a value obtained, the corresponding `case block` is executed.

The meaning of break here is to jump out of the `switch` block. If break is encountered, the following case block will no longer be compared, and jump out of `switch` directly. Note that after jumping to the `case block`, if there is no `break`, it will continue to compare other value and jump to other blocks.

## foreach loop

foreach is used to iterate over `iterable-container`. Such as `array`, `dictionary` or other custom containers. Each loop will get one of the items in the current container.

```
foreach(<item name> in <container name>){
    # ...
}
```

For example, it will output every elements in the array.

```
set arr[]:number = [1,2,3,4,5];
foreach(num in arr){
    print(num);
}
# output: 1,2,3,4,5
```

Note that when working in `foreach block`, the items and the container itself become read-only within the scope of the block. That is, you cannot do anything other than read operations on elements and containers inside a foreach block.

For example, it will throw compiler error,

```
set arr[]:number = [1,2,3,4,5];
foreach(num in arr){
    num = num + 1;
    # it changes the item's value.
}
```

and

```
set arr[]:number = [1,2,3,4,5];
foreach(num in arr){
    arr.push(num);
    # it changes the container.
}
```

## for loop

The format of the `for loop` is as follows,

```
for(<statement-0>;<expression>;<statement-1>){
    # body
}
```

`statement-0` and `statement-1` can be arbitrary statements. And `expression` is an expression that returns a boolean value.

Before each loop, the expression will be evaluated. If the return value of the expression is true, the loop will be executed, otherwise the loop will be jumped out.

It is often used for array traversal, numeric subscript traversal, and so on.

For example,
```
set arr[]:number = [1,2,3,4,5];
for(set i:number = 0; i < arr.length; i++){
    print(arr[i]);
}
# output: 1,2,3,4,5
```

## while loop

The format of the `while loop` is as follows,

```
while(<expression>){
    # body
};
```

Before each traversal, the `expression` will be evaluated, if it is true, it will enter the loop, otherwise it will jump out of the loop.

## do-while loop

The format of the `do-while loop` is as follows,

```
do{
    # body
}while(true);
```

The difference between its effect and `while loop` is that the `expression` will not be evaluated to verify true before the first loop, but will directly enter the first loop. Then subsequent loops will validate the `expression`.

## Jump

To jump out of flow control, you can use the `break` keyword.
break only supports jumping out of the following control blocks:`do-while`,`while`,`for`,`foreach`,`switch-case`

When a `break` is encountered, it will only jump out of the current control block. For example, if the control block is nested

```
for(set i = 0 ;i < 10; i++){        # loop-1
    for(set j = 0 ;j < 10; j++){    # loop-2
        break;
    }
}
```

The `break` only jump out of loop 2. And loop-1 will not be effected.