import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// COMPONENTS
import { BlogCreateComponent } from '@app/features/blog/pages/blog-create/blog-create.component';
import { BlogDetailComponent } from '@app/features/blog/pages/blog-detail/blog-detail.component';
import { BlogListComponent } from '@app/features/blog/pages/blog-list/blog-list.component';

// RESOLVERS
import { PendingBlogListResolverService } from '@app/features/blog/services/resolvers/pending-blog-list/pending-blog-list-resolver.service';
import { BlogDetailResolverService } from '@app/features/blog/services/resolvers/blog-detail/blog-detail-resolver.service';

// RESOLVERS

const routes: Routes =
  [
    // DEFAULT
    {
      path: '',
      data: { title: 'Blog List' },
      component: BlogListComponent,
      resolve: { pageData: PendingBlogListResolverService },
    },

    {
      path: 'create',
      data: { title: 'Create New Blog' },
      component: BlogCreateComponent,
      pathMatch: 'full'
    },

    {
      path: ':id',
      data: { title: 'Blog Detail' },
      component: BlogDetailComponent,
      resolve: { pageData: BlogDetailResolverService }
    }
  ];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class BlogRoutingModule { }
