import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from '@shared/components/button/button/button.component';
import { MaterialModule } from '@material/material.module';

@NgModule({
  imports: [
    CommonModule,

    MaterialModule
  ],
  declarations:
  [
    ButtonComponent
  ],
  exports:
  [
    ButtonComponent
  ]
})
export class ButtonModule { }
