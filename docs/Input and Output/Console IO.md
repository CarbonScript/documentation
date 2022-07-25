
## read(void):string

Carbon Script provides a built-in function read(), which acts as a reader in the standard input and output streams and can accept data input from the standard input stream.

This function receives a string from the console. This function takes a newline as the input terminator. So it cannot accept strings with newlines.

For example, in the example below, the input is accepted and stored in a variable.

```
set your_name : string;
your_name = read();
```

If you want to accept numbers, you need to convert first, convert the string to number.

## print(param:string):void

This function outputs a string to the standard output stream. The function parameter is the string to output.

But the output will not wrap. So you need to add a `\n` by yourself when outputting a multiple-line string.

Also, this function can only accept strings as output. If you want to output numbers, booleans, you should convert them by explicitly converting them to strings.

```
set a1,a2 : number = 8,9;
print("The sum is:");
print(strToNum(a1 + a2));
```