import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports:
  [
    CommonModule,
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
