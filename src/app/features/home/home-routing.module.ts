import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// COMPONENTS
import { HomeComponent } from '@app/features/home/pages/home/home.component';

// RESOLVERS

const routes: Routes =
[
  // DEFAULT
  {
    path: '',
    data: { title: 'Home' },
    component: HomeComponent,
    // resolve: { pageData: HomeResolverService },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
