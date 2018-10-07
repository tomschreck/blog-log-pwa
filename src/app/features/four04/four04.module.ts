import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// IMPORTS
import { MaterialModule } from '@material/material.module';
import { SharedModule } from '@shared/shared.module';

// ROUTING

// COMPONENTS
import { Four04Component } from './components/four04/four04.component';

@NgModule({
  imports:
  [
    CommonModule,
    MaterialModule,
    SharedModule
  ],
  declarations:
  [
    Four04Component
  ]
})
export class Four04Module { }
