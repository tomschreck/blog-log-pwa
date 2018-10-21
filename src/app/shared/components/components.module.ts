import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '@app/shared/components/button/button.module';

// IMPORTS
import { MaterialModule } from '@app/material/material.module';
import {SlideshowModule} from 'ng-simple-slideshow';

// COMPONENTS
import { ImageComponent } from './media/image/image.component';
import { PageTitleComponent } from '@app/shared/components/page-title/page-title.component';
import { SpinnerComponent } from '@app/shared/components/spinner/spinner.component';
import { ImageSliderComponent } from './media/image-slider/image-slider.component';
import { MapBoxComponent } from './map-box/map-box.component';

@NgModule({
  imports:
  [
    ButtonModule,
    CommonModule,
    MaterialModule,
    SlideshowModule
  ],
  declarations:
  [
    ImageComponent,
    ImageSliderComponent,
    MapBoxComponent,
    PageTitleComponent,
    SpinnerComponent
  ],
  exports:
  [
    ImageComponent,
    ImageSliderComponent,
    MapBoxComponent,
    PageTitleComponent,
    SpinnerComponent,
  ],
  providers:
  [
  ]
})
export class ComponentsModule { }
