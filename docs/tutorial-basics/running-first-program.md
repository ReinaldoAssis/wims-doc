---
sidebar_position: 3
---

# Writing Your First Program

Now that you've gotten familiar with the IDE layout and the WIMS instruction set and directives, let's get our hands dirty and write a good old "Hello World" program! Don't worry if this program seems too difficult at first. The main goal here is to familiarize yourself with instructions and directives and to learn how to assemble and run your code inside the simulator. Later on, we'll provide you with a guide to learning assembly from the beginning, writing simple programs, and gradually increasing complexity until you're writing full-blown games inside the simulator.

### Defining the "Hello World" String

Let's start by defining where our "Hello World" string will go. This is completely arbitrary, and you're encouraged to come up with a different address yourself (always keep in mind that it should be a multiple of four!).

```assembly
.org 400
.dw "Hello World!"
```

Great! We've defined our string. Now, let's assemble our code (right pane, first button) and run it (right pane, second button). After running, if we go to the memory terminal and write `400-444`, we should see the ASCII values of our string characters in memory. The result is as follows:

![Docusaurus logo](/img/ide/hello-world-memterminal.png)

```
400-444: 72 101 108 108 111 32 87 111 114 108 100 33 
```

Now, let's peek at address `448`. Look at that—it's zero! Why do you think that is? Every string has a terminator word (all zeros) to signal the end of the string, so always keep in mind that when defining a string, the total number of words it will use is `len(str) + 1`. Knowing that the string ends with a zero, we can come up with a simple print function.

### Writing the Print Function

Let's extend our program to include a function that prints our "Hello World" string to the terminal:

```mips
.org 400
.dw "Hello World!"

.org PC_START
j main          # Skip to the main function

# Let's define our print function
# $a0 : parameter for our string pointer
print:
    lw $v0 0($a0)               # Load the character at address $a0
    beq $v0 $zero print_done    # Terminate print if terminator is found
    call 2                      # System call to print character to terminal
    addi $a0 $a0 4              # Increment pointer to the next char
    j print                     # Loop back to print next character

print_done:
    jr $ra                      # Return from the function

main:
    addi $a0 $zero 400          # Load the address 400 into $a0
    jal print                   # Call the print function
    call 0                      # Terminate the program
```

Assembling and running our code again will result in "Hello World!" appearing in our terminal. Success!

### Caution: Remember to Assemble!

Every time you update your code, make it a habit to assemble it. When you run your program, it's the assembled version that counts. Often, students forget this and wonder why their code isn't working as expected. Assembling ensures that your latest changes are reflected in the execution.

:::tip[Pro Tip]
Experiment with different memory addresses and string values to get more comfortable with how memory and instructions work together in WIMS.
:::

:::caution[Don't Forget]
Always remember to assemble your code before running it. This simple habit can save you a lot of debugging time!
:::
