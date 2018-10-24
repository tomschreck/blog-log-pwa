import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnectionService } from '@app/core/services/connection-service/connection.service';
import { DeviceService } from '@app/core/services/device/device.service';
import { HttpService } from '@app/core/services/http/http.service';
import { MessageService } from '@core/services/messages/message.service';
import { NavigationService } from '@app/core/services/navigation/navigation.service';
import { ScrollService } from '@app/core/services/scroll/scroll.service';

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
      ConnectionService,
      DeviceService,
      HttpService,
      MessageService,
      NavigationService,
      ScrollService
    ]
})
export class ServicesModule { }
