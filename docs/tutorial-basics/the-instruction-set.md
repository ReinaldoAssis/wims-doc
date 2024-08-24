---
sidebar_position: 2
---

# The Instruction Set

Before writing any code, it's important to understand the instructions available in WIMS. The following table summarizes the instruction set:

| **INSTRUCTION** | **OPERATION**                              | **DESCRIPTION**                                           |
|-----------------|--------------------------------------------|-----------------------------------------------------------|
| ADD             | `Rd = Rs + Rt`                             | Adds the values in `Rs` and `Rt`, stores the result in `Rd`. |
| ADDI            | `Rd = Rs + Imm`                            | Adds the immediate value `Imm` to `Rs`, stores the result in `Rd`. |
| OR              | `Rd = Rs \| Rt`                            | Performs a bitwise OR between `Rs` and `Rt`, stores the result in `Rd`. |
| AND             | `Rd = Rs & Rt`                             | Performs a bitwise AND between `Rs` and `Rt`, stores the result in `Rd`. |
| SUB             | `Rd = Rs - Rt`                             | Subtracts the value in `Rt` from `Rs`, stores the result in `Rd`. |
| SLT             | `Rd = (Rs < Rt)`                           | Sets `Rd` to 1 if `Rs` is less than `Rt`, otherwise sets `Rd` to 0. |
| SLTI            | `Rd = (Rs < Imm)`                          | Sets `Rd` to 1 if `Rs` is less than the immediate value `Imm`, otherwise sets `Rd` to 0. |
| BEQ             | `if (Rs == Rt) PC = PC + Imm`              | Branches to the address `PC + Imm` if `Rs` is equal to `Rt`. |
| BNE             | `if (Rs != Rt) PC = PC + Imm`              | Branches to the address `PC + Imm` if `Rs` is not equal to `Rt`. |
| LW              | `Rd = Memory[Rs + Imm]`                    | Loads a word from memory at the address `Rs + Imm` into `Rd`. |
| SW              | `Memory[Rs + Imm] = Rt`                    | Stores the word in `Rt` into memory at the address `Rs + Imm`. |
| J               | `PC = Imm`                                 | Jumps to the address specified by `Imm`.                    |
| JR              | `PC = Rs`                                  | Jumps to the address contained in `Rs`.                     |
| JAL             | `RA = PC + 4; PC = Imm`                    | Saves the return address in `RA` and jumps to the address `Imm`. |
| CALL 0          | Halt                                        | Stops program execution.                                    |
| CALL 1          | Print integer `$v0`                        | Prints the value in `$v0` as an integer.                    |
| CALL 2          | Print character `$v0`                      | Prints the value in `$v0` as an ASCII character.            |
| CALL 3          | Print integer `$v0` w/o newline            | Prints the value in `$v0` as an integer without a newline.  |
| CALL 42         | `$v0 = Random($a0,$a1)`                    | Generates a random integer between `$a0` and `$a1`, stores it in `$v0`. |
| CALL 40         | Screen update                              | Updates the simulator's screen.                             |
| MUL             | `LO = Rs * Rt (lower 32 bits)` <br/> `HI = Rs * Rt (upper 32 bits)` | Multiplies `Rs` and `Rt`, stores the lower 32 bits in `LO` and the upper 32 bits in `HI`. |
| DIV             | `LO = Rs / Rt` <br/> `HI = Rs % Rt`         | Divides `Rs` by `Rt`, stores the quotient in `LO` and the remainder in `HI`. |
| MFHI            | `Rd = HI`                                  | Moves the value from `HI` to `Rd`.                          |
| MFLO            | `Rd = LO`                                  | Moves the value from `LO` to `Rd`.                          |
| SLL             | `Rd = Rs << Shamt`                         | Shifts `Rs` left by `Shamt` bits, stores the result in `Rd`. |
| SRL             | `Rd = Rs >> Shamt`                         | Shifts `Rs` right by `Shamt` bits, stores the result in `Rd`. |
| PUSH            | `Memory[SP] = Rs; SP = SP - 4`             | Pushes the value in `Rs` onto the stack, decrements the stack pointer (`SP`). |
| POP             | `Rd = Memory[SP]; SP = SP + 4`             | Pops the top value from the stack into `Rd`, increments the stack pointer (`SP`). |

### Explanation of Instructions

- **Arithmetic Operations:** Instructions like `ADD`, `SUB`, and `MUL` perform basic arithmetic operations on the register contents.
- **Logical Operations:** Instructions like `AND`, `OR`, `SLT`, `SLTI`, `SLL`, and `SRL` handle bitwise logical operations or comparisons.
- **Branching and Control:** Instructions such as `BEQ`, `BNE`, `J`, `JR`, and `JAL` alter the program flow based on conditions or direct jumps.
- **Memory Operations:** `LW` and `SW` are used to load and store data between memory and registers.
- **Function Calls:** Special `CALL` instructions handle I/O operations like printing to the screen or generating random numbers.
- **Multiplication/Division:** The `MUL` and `DIV` instructions perform multiplication and division, with results stored in special registers.
- **Stack Operations:** The `PUSH` and `POP` instructions manage the stack, typically used in function calls to save and restore register values.

### Directives and Constants

Another important aspect of assembly programming is the use of directives. Directives give instructions to the assembler rather than the CPU. The WIMS assembler supports the following directives:

- **`.org`**: Defines where in memory the code below it should be loaded.
  
  ```assembly
  .org 0x2000
  ```
  
  This sets the starting address for the code to 0x2000.

- **`.dw`**: Defines a word in memory at the current instruction address. This can be a string (each character is stored as a word) or a number (in hexadecimal with `0x`, binary with `0b`, or decimal).
  
  ```assembly
  .dw "Hello"
  .dw 0x1234
  .dw 0b101010
  ```

### Assembler Constants

WIMS also includes several predefined constants:

- **`PC_START`**: The initial program counter address.
- **`SCREEN_MEM_START`**: The starting address of the screen memory.
- **`SCREEN_MEM_END`**: The ending address of the screen memory.
- **`INPUT_BUFFER_ADDR`**: The address of the input buffer.
- **`STACK_START`**: The starting address of the stack.

#### Examples:

- To start the program counter at a specific location:
  
  ```assembly
  .org PC_START
  ```

- To store a word at the beginning of the screen memory:
  
  ```assembly
  .org SCREEN_MEM_START
  .dw 0xFFFF
  ```

- To store something at the start of the stack:
  
  ```assembly
  .org STACK_START
  .dw 42
  ```

Understanding these instructions and directives will help you make the most of WIMS and write efficient, functional assembly programs.

:::tip[Pro Tip]
Familiarize yourself with these instructions and directives to write better, more optimized assembly code.
:::

:::danger[Be Careful]
Incorrect use of directives can lead to unexpected behavior in your programs. Always double-check your memory addresses and instruction order.
:::
