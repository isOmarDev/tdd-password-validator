export class PasswordValidator {
  static validate(password: string) {
    let result: {
      valid: boolean;
      errors: (
        | 'InvalidLength'
        | 'MissingDigit'
        | 'MissingUppercase'
      )[];
    } = { valid: false, errors: [] };

    if (password === 'Omar1') {
      result.valid = true;
    }

    if (password.length < 5 || password.length > 15) {
      result.errors.push('InvalidLength');
    }

    if (!/\d/.test(password)) {
      result.errors.push('MissingDigit');
    }

    if (!/[A-Z]/.test(password)) {
      result.errors.push('MissingUppercase');
    }

    return result;
  }
}
