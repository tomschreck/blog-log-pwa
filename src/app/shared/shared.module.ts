import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormLibraryModule } from '@app/shared/form-library/form-library.module';
import { ComponentsModule } from '@app/shared/components/components.module';

@NgModule({
  imports:
  [
    CommonModule,
    ComponentsModule,
    FormLibraryModule
  ],
  declarations:
  [
  ],
  exports:
  [
    ComponentsModule,
    FormLibraryModule
  ]
})
export class SharedModule { }
