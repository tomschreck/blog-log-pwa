import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// IMPORTS
import { ButtonModule } from '@app/shared/components/button/button.module';
import { DirectivesModule } from '@app/shared/directives/directives.module';
import { MaterialModule } from '@app/material/material.module';

// COMPONENTS
import { FormButtonsComponent } from '@app/shared/form-library/form-buttons/form-buttons.component';
import { LogCreateFormComponent } from '@app/shared/form-library/log-forms/log-create/log-create-form.component';


@NgModule({
  imports:
  [
    ButtonModule,
    CommonModule,
    DirectivesModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations:
  [
    FormButtonsComponent,
    LogCreateFormComponent
  ],
  exports:
  [
    LogCreateFormComponent
  ]
})
export class FormLibraryModule { }
