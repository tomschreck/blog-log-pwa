import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// COMPONENTS
import { BlogCreateComponent } from '@app/features/blog/pages/blog-create/blog-create.component';
import { BlogListComponent } from '@app/features/blog/pages/blog-list/blog-list.component';

// RESOLVERS
import { PendingBlogListResolverService } from '@app/features/blog/services/resolvers/pending-blog-list/pending-blog-list-resolver.service';

// RESOLVERS

const routes: Routes =
  [
    // DEFAULT
    {
      path: '',
      data: { title: 'Log List' },
      component: BlogListComponent,
      resolve: { pageData: PendingBlogListResolverService },
    },

    {
      path: 'create',
      data: { title: 'Create New Log' },
      component: BlogCreateComponent,
      pathMatch: 'full'
    },
  ];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class BlogRoutingModule { }
