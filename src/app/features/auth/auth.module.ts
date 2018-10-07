import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// IMPORTS
import { MaterialModule } from '@material/material.module';
import { SharedModule } from '@shared/shared.module';

// COMPONENTS
import { CallbackComponent } from './components/callback/callback.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
  imports:
    [
      CommonModule,
      MaterialModule,
      SharedModule
    ],
  declarations:
    [
      CallbackComponent,
      LoginComponent,
      LogoutComponent
    ],
  exports:
    [
      CallbackComponent,
      LoginComponent
    ]
})
export class AuthModule { }
