import {Pipe, PipeTransform} from '@angular/core';
import {TextInputValidation} from '../utils/text-input-validation';

/**
 * Pipe implementation that transforms a text value into a validation message.
 * The following rules are validated: the text is an integer, the text is at least 3 characters long, the text contains a 9.
 */
@Pipe({
  name: 'validationPipe'
})
export class ValidationPipe implements PipeTransform {

  /**
   * Transforms the input value into a validation message.
   * @param value the text value passed to the pipe
   * @param args the arguments passed to the pipe
   */
  public transform(value: string, ...args: unknown[]): string {
    if (!TextInputValidation.isInteger(value)) {
      return 'the inserted text is not an integer';
    } else if (!TextInputValidation.isThreeCharactersOrMore(value) && !TextInputValidation.containsNine(value)) {
      return 'the inserted text is too short and it does not contain a 9';
    } else if (!TextInputValidation.isThreeCharactersOrMore(value)) {
      return 'the inserted text is too short';
    } else if (!TextInputValidation.containsNine(value)) {
      return 'the inserted text does not contain a 9';
    } else {
      return 'validated';
    }
  }
}
