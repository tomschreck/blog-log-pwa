import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// IMPORTS
import { MaterialModule } from '@material/material.module';
import { SharedModule } from '@shared/shared.module';

// ROUTING
import { HomeRoutingModule } from './home-routing.module';

// COMPONENTS
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  imports:
    [
      CommonModule,
      HomeRoutingModule,
      MaterialModule,
      SharedModule
    ],
  declarations:
    [
      HomeComponent
    ]
})
export class HomeModule { }
