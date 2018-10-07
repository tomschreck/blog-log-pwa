import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '@app/shared/components/button/button.module';

// COMPONENTS
import { PageTitleComponent } from '@app/shared/components/page-title/page-title.component';

@NgModule({
  imports:
  [
    ButtonModule,
    CommonModule
  ],
  declarations:
  [
    PageTitleComponent
  ],
  exports:
  [
    PageTitleComponent
  ]
})
export class ComponentsModule { }
