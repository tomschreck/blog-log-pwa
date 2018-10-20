import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormLibraryModule } from '@app/shared/form-library/form-library.module';
import { ComponentsModule } from '@app/shared/components/components.module';
import { PipesModule } from '@app/shared/pipes/pipes.module';

@NgModule({
  imports:
  [
    CommonModule,
    ComponentsModule,
    FormLibraryModule,
    PipesModule
  ],
  declarations:
  [
  ],
  exports:
  [
    ComponentsModule,
    FormLibraryModule,
    PipesModule
  ]
})
export class SharedModule { }
