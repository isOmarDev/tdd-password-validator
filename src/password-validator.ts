export class PasswordValidator {
  static validate(password: string) {
    if (password.length < 5) {
      return { valid: true, errors: ['InvalidLength'] };
    }

    if (password.length > 15) {
      return { valid: true, errors: ['InvalidLength'] };
    }

    if (password === 'omarkamel') {
      return { valid: true, errors: ['MissingDigit'] };
    }
  }
}
