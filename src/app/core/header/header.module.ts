import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeaderBackComponent } from './components/header-back/header-back.component';

@NgModule({
  imports:
    [
      CommonModule
    ],
  declarations:
    [
      HeaderComponent,
      HeaderBackComponent
    ],
  exports:
    [
      HeaderComponent,
      HeaderBackComponent
    ]
})
export class HeaderModule { }
