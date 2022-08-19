---
sidebar_position: 4
---

## Program Entry

Similar to C language, Java, etc., Carbon Script provides a program entry function. When the program is run, the program entry function is executed first.

This entry is the `main` function.

The form is the same as the ordinary function, but it is named `main`, and it does not receive any parameters and returns a number value to indicate the exit status of the program.

```
main(void):number {
  # Program code
  return 0;
}
```

## Program Exit

If you want to launch a running program, there are generally two situations:

+ The program flow is in the `main` function.
+ Program flow in other functions

For the first case, use return directly in the main function to exit the program.

```
main(void):number {
  set a = false
  if(a){
    return; # The program will exit at this position
  }
  else{
    # ....
  }
  return 0;
}
```

In the second case, you can use the `die` function to exit the program.

```

some_func(void):void {
  die();  # The program will exit at this position
}

main(void):number {
  some_func();
  return 0;
}
```

The `die` function's parameter could be null or a number to indicate exit status

For example, this will be exit with -1:
```
die(-1);
```