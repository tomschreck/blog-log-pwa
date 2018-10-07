import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutofocusDirective } from '@app/shared/directives/autofocus/autofocus.directive';

@NgModule({
  imports:
  [
    CommonModule
  ],
  declarations:
  [
    AutofocusDirective
  ],
  exports:
  [
    AutofocusDirective
  ]
})
export class DirectivesModule { }
