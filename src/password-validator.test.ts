import { PasswordValidator } from './password-validator';

describe('password validator', () => {
  it.each(['omar_Kamel1', 'omar1smailKamel', 'Omar1'])(
    'returns a success result when "%s" meets all criteria',
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

  describe('checks between 5 - 15 characters', () => {
    it.each([
      ['Oma1', false, ['InvalidLength']],
      ['OmarIsmailkamel1', false, ['InvalidLength']],
    ])(
      'returns "InvalidLength" error when password "%s" has invalid length',
      (input, isValid, errors) => {
        const result = PasswordValidator.validate(input);

        expect(result.valid).toBe(isValid);
        expect(result.errors).toHaveLength(1);
        expect(result.errors).toEqual(errors);
      }
    );
  });

  describe('checks for at least one digit', () => {
    it.each([
      ['omarKamel', false, ['MissingDigit']],
      ['omar_smailKamel', false, ['MissingDigit']],
    ])(
      'returns "MissingDigit" error when password "%s" has no digits',
      (input, isValid, errors) => {
        const result = PasswordValidator.validate(input);

        expect(result.valid).toBe(isValid);
        expect(result.errors).toHaveLength(1);
        expect(result.errors).toEqual(errors);
      }
    );
  });

  describe('checks for at least one uppercase letter', () => {
    it.each([
      ['omar1', false, ['MissingUppercase']],
      ['omarismail1', false, ['MissingUppercase']],
    ])(
      'returns "MissingUppercase" error when password "%s" has no uppercase letters',
      (input, isValid, errors) => {
        const result = PasswordValidator.validate(input);

        expect(result.valid).toBe(isValid);
        expect(result.errors).toHaveLength(1);
        expect(result.errors).toEqual(errors);
      }
    );
  });

  describe('checks for muliple errors', () => {
    it.each([
      ['omar1', false, ['MissingUppercase']],
      ['omarkamel', false, ['MissingDigit', 'MissingUppercase']],
      [
        'omar',
        false,
        ['MissingDigit', 'InvalidLength', 'MissingUppercase'],
      ],
    ])(
      'returns "%s" as "%s" with %p errors',
      (input, valid, errors) => {
        const result = PasswordValidator.validate(input);

        expect(result.valid).toBe(valid);
        expect(result.errors).toHaveLength(errors.length);
        result.errors.forEach((error) => {
          expect(errors).toContain(error);
        });
      }
    );
  });
});
