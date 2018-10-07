import { AbstractControl, ValidatorFn } from '@angular/forms';

export function NotZeroValidator(control: AbstractControl)
{
  // messy but you get the idea
  const isZero = (control.value === 0);
  const isValid = !isZero;

  return isValid ? null : { 'isZero': true };
}
