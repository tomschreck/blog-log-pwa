import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpService } from '@app/core/services/http/http.service';
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
      HttpService,
      MessageService,
      NavigationService
    ]
})
export class ServicesModule { }
