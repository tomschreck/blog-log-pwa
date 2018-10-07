import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoWhiteSpaceDirective } from './no-white-space/no-white-space.directive';
import { NotZeroDirective } from '@app/shared/form-library/validators/not-zero/not-zero.directive';

@NgModule({
  imports:
  [
    CommonModule
  ],
  declarations:
  [
    NoWhiteSpaceDirective,
    NotZeroDirective
  ],
  exports:
  [
    NoWhiteSpaceDirective,
    NotZeroDirective
  ]
})
export class ValidatorsModule { }
