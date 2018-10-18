import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { MaterialModule } from '@app/material/material.module';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports:
  [
    CommonModule,
    MaterialModule,
    SharedModule
  ],
  declarations:
  [
    BlogCardComponent
  ],
  exports:
  [
    BlogCardComponent
  ]
})
export class SharedBlogModule { }
