# TDD Password Validator

A simple Password Validator built using Test-Driven Development (TDD) by wishful thinking.

## Project Overview (TDD)

This project is a simple Password Validator built using Test-Driven Development (TDD).  
The goal of the project is to practice writing tests first, then implementing the validation logic to make the tests pass.

## What is Password Validation?

Password validation is the process of checking if a password meets a predefined set of security rules.

This project validates passwords based on the following rules:

- Must be between _5 and 15 characters_
- Must contain _at least one digit_
- Must contain _at least one uppercase letter_

If the password is invalid, the function returns _all errors at once_.

## Validation Rules

A valid password must:

- Be 5–15 characters long
- Contain at least one number
- Contain at least one uppercase letter

## Features

The password validator supports:

- Length validation
- Numeric character validation
- Uppercase character validation
- Multiple error reporting at once
- Built with TypeScript for type safety

## Tech Stack

- TypeScript
- Node.js
- Jest (testing)

## Project Structure

```
tdd-password-validator/
├── src/
│ └── password-validator.test.ts
│ └── password-validator.ts
│ └── FIND.md
├── package.json
└── README.md
```

## Approach

This project follows the classic TDD cycle by the wishful thinking technique :

1. Write a failing test (_Red_)
2. Write the minimal code to make the test pass (_Green_)
3. Refactor the code while keeping tests green (_Refactor_)

## Getting Started

### Installation

bash
git clone https://github.com/Mohamed-kamel91/tdd-password-validator.git
cd tdd-password-validator
npm install

### Running Tests

bash
npm test
npm run test:dev

## Usage

### Basic Usage

```ts
import { validatePassword } from "./src/passwordValidator";

console.log(validatePassword("Abc12"));

{
  result: true,
  errors: []
}


console.log(validatePassword("abc"));

{
  result: false,
  errors: [
  'InvalidLength',
  'MissingUppercase',
  'MissingDigit'
  ]
}

```

## API

### validatePassword(password: string): ValidationResult

_Parameters:_

- password (string): The password to validate

_Returns:_

```ts
{
result: boolean,
errors: string[]
}
```

- result: true if the password passes all rules
- errors: A list of all validation errors (empty if valid)
