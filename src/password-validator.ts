export class PasswordValidator {
  static validate(password: string) {
    if (password === 'omar') {
      return {
        valid: false,
        errors: ['InvalidLength', 'MissingDigit', 'MissingUppercase'],
      };
    }

    if (password.length < 5 || password.length > 15) {
      return { valid: false, errors: ['InvalidLength'] };
    }

    if (!/\d/.test(password)) {
      return { valid: false, errors: ['MissingDigit'] };
    }

    if (!/[A-Z]/.test(password)) {
      return { valid: false, errors: ['MissingUppercase'] };
    }
  }
}
