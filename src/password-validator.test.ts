import { PasswordValidator } from './password-validator';

describe('password validator', () => {
  describe('password length', () => {
    it.each(['omar', 'omarismailkamel1'])(
      'should return "InvalidLength" error type if length is less than 5 or more than 15 characters',
      (value) => {
        const password = value;
        const errorType = 'InvalidLength';

        const result = PasswordValidator.validate(password);

        expect(result?.valid).toBeTruthy();
        expect(result?.errors).toHaveLength(1);
        expect(result?.errors[0]).toBe(errorType);
        expect(result).toEqual({
          valid: true,
          errors: [errorType],
        });
      }
    );
  });

  describe('password contains digit', () => {
    it.each(['omarkamel', 'omarIsmailKamel'])(
      'should return "MissingDigit" error type if password doesnt contain at least one digit like "omarkamel"',
      (value) => {
        const password = value;
        const errorType = 'MissingDigit';

        const result = PasswordValidator.validate(password);

        expect(result?.valid).toBeTruthy();
        expect(result?.errors).toHaveLength(1);
        expect(result?.errors[0]).toBe(errorType);
        expect(result).toEqual({
          valid: true,
          errors: [errorType],
        });
      }
    );
  });
});
