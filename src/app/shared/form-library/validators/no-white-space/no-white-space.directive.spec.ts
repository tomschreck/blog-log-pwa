import { AbstractControl } from '@angular/forms';
import { NoWhitespaceValidator } from '@shared/forms/validators/no-white-space/no-whitespace.validator';

xdescribe('Whitespace Validator', () =>
{
  it('empty string is invalid', () =>
  {
    const control = { value: '' };
    const result = NoWhitespaceValidator(control as AbstractControl);
    expect(result !== null).toBe(true);
    // expect(result[ 'whitespace' ]).toBe('value is only whitespace');
  });

  it('spaces only are invalid', () =>
  {
    const control = { value: '    ' };
    const result = NoWhitespaceValidator(control as AbstractControl);
    expect(result !== null).toBe(true);
  });

  it('null is invalid', () =>
  {
    const control: any = { value: null };
    const result = NoWhitespaceValidator(control as AbstractControl);
    expect(result !== null).toBe(true);
  });

  it('text is not considered invalid', () =>
  {
    const control = { value: 'i have whitespace on the inside' };
    const result = NoWhitespaceValidator(control as AbstractControl);
    expect(result).toBe(null);
  });
});
