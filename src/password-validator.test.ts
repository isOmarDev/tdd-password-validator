import { PasswordValidator } from './password-validator';

describe('password validator', () => {
  describe('password length', () => {
    it('should return "InvalidLength" error type if length is less than 5 characters like "omar"', () => {
      expect(PasswordValidator.validate('omar')?.valid).toBeTruthy();
    });

    it('should return "InvalidLength" error type if length is more than 15 characters like "omarismailkamel1', () => {
      expect(
        PasswordValidator.validate('omarismailkamel1')?.valid
      ).toBeTruthy();
    });
  });

  describe('password contains digit', () => {
    it('should return "MissingDigit" error type if password doesnt contain at least one digit like "omarkamel"', () => {
      expect(
        PasswordValidator.validate('omarkamel')?.valid
      ).toBeTruthy();
    });
  });
});
