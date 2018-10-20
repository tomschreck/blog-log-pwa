import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// IMPORTS
import { MaterialModule } from '@material/material.module';
import { SharedBlogModule } from '@app/features/shared-features/blog/shared-blog.module';
import { SharedModule } from '@shared/shared.module';

// ROUTING
import { BlogRoutingModule } from '@app/features/blog/blog-routing.module';

// COMPONENTS
import { BlogCreateComponent } from './pages/blog-create/blog-create.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { BlogListComponent } from './pages/blog-list/blog-list.component';

@NgModule({
  imports:
    [
      CommonModule,
      BlogRoutingModule,
      MaterialModule,
      SharedBlogModule,
      SharedModule
    ],
  declarations:
    [
      BlogCreateComponent,
      BlogDetailComponent,
      BlogListComponent
    ]
})
export class BlogModule { }
