import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HtmlSanitizerPipe } from './html-sanitizer/html-sanitizer.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations:
  [
    HtmlSanitizerPipe
  ],
  exports:
  [
    HtmlSanitizerPipe
  ]
})
export class PipesModule { }
