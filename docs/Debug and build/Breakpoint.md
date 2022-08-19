---
sidebar_position: 3
---

## Debugger

`debugger` is a built-in keyword used to set breakpoints in a program. It supports three usages: normal breakpoints, conditional breakpoints, and snapshots. It can help you judge whether the flow of the program is working as expected.

The debugger only works when the compiler `mode` option is `debug mode`. In `release mode`, the compiler ignores all debuggers, At this point you can no longer use the debugger to debug work

### debugger

This is a normal breakpoint. When the program flow is executed here, the program will be interrupted and a prompt will be given.

### debugger(boolean expression)

This is a conditional breakpoint. When the program flow is executed here, the expression inside will be executed. If the return result of the execution is `true`, a breakpoint will be triggered, the program will be interrupted.

### debugger(variable, constant or object)

This breakpoint will take a snapshot. If the parentheses are variables, constants and objects, when the program flow is executed here, in addition to interrupting the running of the program, the relevant runtime information of the variables, constants and objects will also be printed out.