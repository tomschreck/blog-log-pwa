import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { NoWhitespaceValidator } from './no-whitespace.validator';

@Directive({
  selector: '[noWhiteSpace][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useValue: NoWhitespaceValidator,
      multi: true
    }
  ]
})
export class NoWhiteSpaceDirective
{
}
