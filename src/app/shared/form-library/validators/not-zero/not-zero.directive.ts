import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { NotZeroValidator } from '@app/shared/form-library/validators/not-zero/not-zero.validator';

@Directive({
  selector: '[notZero][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useValue: NotZeroValidator,
      multi: true
    }
  ]
})
export class NotZeroDirective
{
}
