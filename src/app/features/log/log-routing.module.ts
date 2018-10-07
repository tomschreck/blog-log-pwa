import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// COMPONENTS
import { LogListComponent } from '@app/features/log/pages/log-list/log-list.component';
import { LogCreateComponent } from '@app/features/log/pages/log-create/log-create.component';

// RESOLVERS

const routes: Routes =
  [
    // DEFAULT
    {
      path: '',
      data: { title: 'Log List' },
      component: LogListComponent,
      // resolve: { pageData: HomeResolverService },
    },

    {
      path: 'create',
      data: { title: 'Create New Log' },
      component: LogCreateComponent,
      pathMatch: 'full'
    },
  ];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class LogRoutingModule { }
