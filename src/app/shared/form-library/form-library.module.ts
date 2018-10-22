import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// IMPORTS
import { ButtonModule } from '@app/shared/components/button/button.module';
import { DirectivesModule } from '@app/shared/directives/directives.module';
import { MaterialModule } from '@app/material/material.module';

// COMPONENTS
import { FormButtonsComponent } from '@app/shared/form-library/form-buttons/form-buttons.component';
import { BlogCreateFormComponent } from '@app/shared/form-library/blog-forms/blog-create/blog-create-form.component';

// 3rd PARTY
import { EditorModule } from '@tinymce/tinymce-angular';
import { ComponentsModule } from '@app/shared/components/components.module';
import { BlogCreateOfflineFormComponent } from './blog-forms/blog-create-offline-form/blog-create-offline-form.component';

@NgModule({
  imports:
  [
    ButtonModule,
    CommonModule,
    ComponentsModule,
    DirectivesModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,

    // 3rd PARTY
    EditorModule
  ],
  declarations:
  [
    FormButtonsComponent,
    BlogCreateFormComponent,
    BlogCreateOfflineFormComponent
  ],
  exports:
  [
    BlogCreateFormComponent,
    BlogCreateOfflineFormComponent
  ],
  providers:
  [
  ]
})
export class FormLibraryModule { }
