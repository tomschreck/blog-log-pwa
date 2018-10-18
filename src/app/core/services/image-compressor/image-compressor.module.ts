import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageUtilityService } from '@app/core/services/image-compressor/ImageUtilityService';

@NgModule({
  imports:
  [
    CommonModule
  ],
  declarations:
  [
  ],
  providers:
  [
    ImageUtilityService
  ]
})
export class ImageCompressorModule { }
