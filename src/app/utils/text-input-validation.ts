import {FormControl, ValidationErrors} from '@angular/forms';

/**
 * Validation helper that implements text validation functions for the following rules:
 * the text is an integer, the text is at least 3 characters long, the text contains a 9.
 */
export class TextInputValidation {
  private static readonly digitsPattern = /^\d+$/;

  /**
   * Checks if the text value contains digits only.
   * @param value the text value to validate
   */
  public static isInteger(value: string): boolean {
    return TextInputValidation.digitsPattern.test(value);
  }

  /**
   * Checks if the text value is at least 3 characters long.
   * @param value the text value to validate
   */
  public static isThreeCharactersOrMore(value: string): boolean {
    return value.length >= 3;
  }

  /**
   * Checks if the text value contains at least a 9.
   * @param value the text value to validate
   */
  public static containsNine(value: string): boolean {
    return value.includes('9');
  }

  /**
   * Validator function adapter that returns null if all rules are fulfilled or an error object otherwise.
   * @param control the form control of the validated input field
   */
  public static validateText(control: FormControl): ValidationErrors | null {
    const value = control.value;
    const result = TextInputValidation.isInteger(value)
      && TextInputValidation.isThreeCharactersOrMore(value)
      && TextInputValidation.containsNine(value);
    if (result) {
      return null;
    } else {
      return {validateText: true};
    }
  }
}
