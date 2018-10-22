import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutPageComponent } from '@app/features/about/pages/about-page/about-page.component';

const routes: Routes =
[
  // DEFAULT
  {
    path: '',
    data: { title: 'About Blog Log' },
    component: AboutPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
