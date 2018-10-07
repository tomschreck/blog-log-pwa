import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// IMPORTS
import { MaterialModule } from '@material/material.module';
import { SharedModule } from '@shared/shared.module';

// ROUTING
import { LogRoutingModule } from '@app/features/log/log-routing.module';

// COMPONENTS
import { LogCreateComponent } from './pages/log-create/log-create.component';
import { LogListComponent } from './pages/log-list/log-list.component';

@NgModule({
  imports:
    [
      CommonModule,
      LogRoutingModule,
      MaterialModule,
      SharedModule
    ],
  declarations:
    [
      LogCreateComponent,
      LogListComponent
    ]
})
export class LogModule { }
