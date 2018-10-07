import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterModule } from '@app/core/footer/footer.module';
import { ServicesModule } from '@core/services/services.module';
import { HeaderModule } from '@app/core/header/header.module';

@NgModule({
  imports:
    [
      CommonModule,
      FooterModule,
      HeaderModule,
      ServicesModule
    ],
  declarations:
    [
    ],
  exports:
    [
      FooterModule,
      HeaderModule
    ]
})
export class CoreModule { }
