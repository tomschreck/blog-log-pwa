import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// IMPORTS
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { ButtonModule } from '@app/shared/components/button/button.module';
import { DirectivesModule } from '@app/shared/directives/directives.module';
import { MaterialModule } from '@app/material/material.module';

// COMPONENTS
import { FormButtonsComponent } from '@app/shared/form-library/form-buttons/form-buttons.component';
import { BlogCreateFormComponent } from '@app/shared/form-library/blog-forms/blog-create/blog-create-form.component';
import { MapComponent } from './map/map.component';

// 3rd PARTY
import { EditorModule } from '@tinymce/tinymce-angular';

@NgModule({
  imports:
  [
    AgmCoreModule,
    ButtonModule,
    CommonModule,
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
    MapComponent
  ],
  exports:
  [
    BlogCreateFormComponent,
    MapComponent
  ],
  providers:
  [
    GoogleMapsAPIWrapper
  ]
})
export class FormLibraryModule { }
