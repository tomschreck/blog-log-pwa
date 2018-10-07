import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageService } from '@core/services/messages/message.service';
import { NavigationService } from '@app/core/services/navigation/navigation.service';

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
      MessageService,
      NavigationService
    ]
})
export class ServicesModule { }
