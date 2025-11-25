type PasswordErrors =
  | 'InvalidLength'
  | 'MissingDigit'
  | 'MissingUppercase';

interface PasswordValidationResult {
  valid: boolean;
  errors: PasswordErrors[];
}

export class PasswordValidator {
  private static readonly MIN_LENGTH = 5;
  private static readonly MAX_LENGTH = 15;

  private static isLengthValid(password: string) {
    return (
      password.length >= this.MIN_LENGTH &&
      password.length <= this.MAX_LENGTH
    );
  }

  private static hasDigit(password: string) {
    return /\d/.test(password);
  }

  private static hasUppercase(password: string) {
    return /[A-Z]/.test(password);
  }

  static validate(password: string): PasswordValidationResult {
    const errors: PasswordErrors[] = [];

    if (!this.isLengthValid(password)) {
      errors.push('InvalidLength');
    }

    if (!this.hasDigit(password)) {
      errors.push('MissingDigit');
    }

    if (!this.hasUppercase(password)) {
      errors.push('MissingUppercase');
    }

    return {
      valid: errors.length === 0,
      errors,
    };
  }
}

console.log(PasswordValidator.validate('Oma1'));
console.log(PasswordValidator.validate('Omaaa'));
