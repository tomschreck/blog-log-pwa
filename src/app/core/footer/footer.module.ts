import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from '@app/material/material.module';

@NgModule({
  imports:
  [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  declarations:
  [
    FooterComponent
  ],
  exports:
  [
    FooterComponent
  ]
})
export class FooterModule { }
