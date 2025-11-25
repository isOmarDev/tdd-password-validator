## Description:

Write a stateless class for validating passwords. Passwords must meet the following criteria:

- Between 5 and 15 characters long
- Contains at least one digit
- Contains at least one upper case letter
- Return an object containing a boolean result and an errors key that — when provided with an invalid password — contains an error message or type for all errors in occurrence. There can be multiple errors at a single time.

## Password Validation Rules

### **Between 5 and 15 characters long**

**Success**

- omar1

**Failure**

- omar
- omarismailkamel1

### **Contains at least one digit**

**Success**

- omar1
- omarKamel1991

**Failure**

- omarkamel
- omarIsmailKamel

### **Contains at least one upper case letter**

**Success**

- omarKamel

**Failure**

- omarkamel

### **Return Value Requirements**

Return an object containing:

- a boolean `valid`
- an `errors` key that — when provided with an invalid password — contains an error **type** for all errors in occurrence.

There can be **multiple errors at the same time**.

**Success**

```ts
/*
{
  valid: true,
  errors: []
}
*/
```

**Failure**

```ts
/*
{
  valid: false,
  errors: [
    'InvalidLength',
    'MissingUppercase',
    'MissingDigit'
  ]
}
```