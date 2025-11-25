export class PasswordValidator {
  static validate(password: string) {
    if (password.length < 5 || password.length > 15) {
      return { valid: true, errors: ['InvalidLength'] };
    }

    if (!/\d/.test(password)) {
      return { valid: true, errors: ['MissingDigit'] };
    }

    if (!/[A-Z]/.test(password)) {
      return { valid: true, errors: ['MissingUppercase'] };
    }
  }
}
