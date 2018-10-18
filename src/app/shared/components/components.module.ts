import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '@app/shared/components/button/button.module';

// COMPONENTS
import { PageTitleComponent } from '@app/shared/components/page-title/page-title.component';
import { SpinnerComponent } from '@app/shared/components/spinner/spinner.component';
import { MaterialModule } from '@app/material/material.module';

@NgModule({
  imports:
  [
    ButtonModule,
    CommonModule,
    MaterialModule
  ],
  declarations:
  [
    PageTitleComponent,
    SpinnerComponent
  ],
  exports:
  [
    PageTitleComponent,
    SpinnerComponent
  ]
})
export class ComponentsModule { }
