import {ValidationPipe} from './validation.pipe';

/**
 * Tests for class {@link ValidationPipe}.
 */
describe('DigitsOnlyPipe', () => {
  const pipe = new ValidationPipe();
  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('should return validated for a valid input', () => {
    const result = pipe.transform('109');
    expect(result).toBe('validated');
  });
  it('should return an error if not an integer', () => {
    const result = pipe.transform('test');
    expect(result).toBe('the inserted text is not an integer');
  });
  it('should return an error if not at least 3 characters long', () => {
    const result = pipe.transform('19');
    expect(result).toBe('the inserted text is too short');
  });
  it('should return an error if it does not contain a 9', () => {
    const result = pipe.transform('123');
    expect(result).toBe('the inserted text does not contain a 9');
  });
  it('should return an error if not at least 3 characters long and it does not contain a 9', () => {
    const result = pipe.transform('11');
    expect(result).toBe('the inserted text is too short and it does not contain a 9');
  });
});
