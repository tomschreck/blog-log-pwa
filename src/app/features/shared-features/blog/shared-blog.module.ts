import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { MaterialModule } from '@app/material/material.module';
import { SharedModule } from '@app/shared/shared.module';
import { BlogCardListComponent } from './components/blog-card-list/blog-card-list.component';

@NgModule({
  imports:
  [
    CommonModule,
    MaterialModule,
    SharedModule
  ],
  declarations:
  [
    BlogCardComponent,
    BlogCardListComponent
  ],
  exports:
  [
    BlogCardComponent,
    BlogCardListComponent
  ]
})
export class SharedBlogModule { }
