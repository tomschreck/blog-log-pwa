import { AbstractControl, ValidatorFn } from '@angular/forms';

export function NoWhitespaceValidator(control: AbstractControl)
{
  // messy but you get the idea
  const isWhitespace = (control.value || '').trim().length === 0;
  const isValid = !isWhitespace;

  return isValid ? null : { 'whitespace': true };
}
