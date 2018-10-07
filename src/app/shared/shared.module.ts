import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormLibraryModule } from '@app/shared/form-library/form-library.module';

@NgModule({
  imports:
  [
    CommonModule,
    FormLibraryModule
  ],
  declarations:
  [
  ],
  exports:
  [
    FormLibraryModule
  ]
})
export class SharedModule { }
