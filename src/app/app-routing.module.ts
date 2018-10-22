import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CallbackComponent } from '@app/features/auth/components/callback/callback.component';
import { Four04Component } from '@app/features/four04/components/four04/four04.component';
import { LoginComponent } from '@app/features/auth/components/login/login.component';
import { LogoutComponent } from '@app/features/auth/components/logout/logout.component';

const routes: Routes =
[
  // DEFAULT
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'blog'
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' },
    pathMatch: 'full'
  },
  {
    path: 'logout',
    component: LogoutComponent,
    data: { title: 'Logout' },
    pathMatch: 'full'
  },
  {
    path: 'callback',
    component: CallbackComponent,
    data: { title: 'Callback' },
    pathMatch: 'full'
  },

  // LAZY LOADED:
  {
    path: 'about',
    loadChildren: './features/about/about.module#AboutModule',
    data: { title: 'About Blog Log' }
  },
  {
    path: 'blog',
    loadChildren: './features/blog/blog.module#BlogModule',
    // canActivate: [ IsAuthenticatedAndHasARoleGuard ]
  },

  // 404 ROUTE
  { path: '**', component: Four04Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
