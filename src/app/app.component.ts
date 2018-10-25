import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ScrollService } from '@app/core/services/scroll/scroll.service';
import { DeviceService } from '@app/core/services/device/device.service';
import { Scavenger } from '@wishtack/rx-scavenger';
import { DeviceModel } from '@app/models/device/device.model';
import { ConnectionService } from '@app/core/services/connection-service/connection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit, OnDestroy
{
  private _scavenger = new Scavenger(this);

  @HostBinding('class.standalone') isStandalone: boolean = false;
  @HostBinding('class.offLine') isOffline: boolean = false;

  constructor
  (
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string,
    private scrollService: ScrollService,
    private deviceService: DeviceService,
    private connectionService: ConnectionService
  ) {}

  ngOnInit()
  {
    this.deviceService.DeviceModelStream
        .pipe(this._scavenger.collect())
        .subscribe
        (
          (deviceModel: DeviceModel) =>
          {
            if (deviceModel)
            {
              this.isStandalone = deviceModel.isStandalone;
            }
          }
        );

    this.connectionService.ConnectionMonitorStream
        .pipe(this._scavenger.collect())
        .subscribe
        (
          (isConnected: boolean) =>
          {
            this.isOffline = !isConnected;
          }
        );
  }

  ngOnDestroy()
  {
  }

  onActivate(event: any)
  {
    if (isPlatformBrowser(this.platformId))
    {
      this.scrollService.scrollToTop();
    }
  }
}
