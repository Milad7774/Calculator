# Vanilla JavaScript Calculator

A fully functional calculator built with vanilla HTML, CSS, and JavaScript. Supports basic arithmetic operations with proper operator precedence (multiplication/division before addition/subtraction).

## Features

- Basic operations: addition (+), subtraction (-), multiplication (*), division (/)
- Operator precedence (BODMAS/BIDMAS rules)
- Clear (C) and delete (⌫) buttons
- Disables zero button when display shows "0"
- Prevents multiple consecutive operators
- Responsive button layout

## How It Works

The calculator parses the expression string into separate arrays of numbers and operators, then:

1. Handles multiplication and division first
2. Processes addition and subtraction
3. Respects negative numbers

No `eval()` was used — the parsing and evaluation logic is custom-built.

## Technologies

- HTML5
- CSS3 (Flexbox, Grid)
- JavaScript (ES6)

### Live Preview HERE:
[Visit Link](https://milad7774.github.io/Calculator/) 
