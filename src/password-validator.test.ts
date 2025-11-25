import { PasswordValidator } from './password-validator';

describe('when validating password length', () => {
  describe('password length', () => {
    it.each(['Oma1', 'OmarIsmailkamel1'])(
      'returns "InvalidLength" when password length is outside 5–15 characters',
      (password) => {
        const errorType = 'InvalidLength';

        const result = PasswordValidator.validate(password);

        expect(result?.valid).toBe(false);
        expect(result?.errors).toHaveLength(1);
        expect(result?.errors[0]).toBe(errorType);
        expect(result).toEqual({
          valid: false,
          errors: [errorType],
        });
      }
    );
  });

  describe('when validating password digits', () => {
    it.each(['omarKamel', 'omar_smailKamel'])(
      'returns "MissingDigit" when the password does not contain at least one digit',
      (password) => {
        const errorType = 'MissingDigit';

        const result = PasswordValidator.validate(password);

        expect(result?.valid).toBe(false);
        expect(result?.errors).toHaveLength(1);
        expect(result?.errors[0]).toBe(errorType);
        expect(result).toEqual({
          valid: false,
          errors: [errorType],
        });
      }
    );
  });

  describe('when validating uppercase letters', () => {
    it('returns "MissingUppercase" when the password has no uppercase characters', () => {
      const password = 'omarismail1';
      const errorType = 'MissingUppercase';

      const result = PasswordValidator.validate(password);

      expect(result?.valid).toBe(false);
      expect(result?.errors).toHaveLength(1);
      expect(result?.errors[0]).toBe(errorType);
      expect(result).toEqual({
        valid: false,
        errors: [errorType],
      });
    });
  });

  describe('when validating all criteria', () => {
    it('returns ["InvalidLength", "MissingDigit", "MissingUppercase"] when the password has not met  all criteria', () => {
      const password = 'omar';
      const errorsType = [
        'InvalidLength',
        'MissingDigit',
        'MissingUppercase',
      ];

      const result = PasswordValidator.validate(password);

      expect(result?.valid).toBe(false);
      expect(result?.errors).toHaveLength(3);
      expect(result?.errors).toEqual(errorsType);
      expect(result).toEqual({
        valid: false,
        errors: errorsType,
      });
    });
  });

  it.each(['omar_Kamel1', 'omar1smailKamel', 'Omar1'])(
    'returns a valid result when password meets all criteria',
    (password) => {
      const result = PasswordValidator.validate(password);

      expect(result.valid).toBe(true);
      expect(result.errors).toHaveLength(0);
      expect(result.errors).toEqual([]);
      expect(result).toEqual({
        valid: true,
        errors: [],
      });
    }
  );
});
