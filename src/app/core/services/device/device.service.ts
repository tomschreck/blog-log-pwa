import { Injectable } from '@angular/core';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { BehaviorSubject } from 'rxjs';
import device	from 'current-device';

import { DeviceModel } from '@app/models/device/device.model';

@Injectable({
  providedIn: 'root'
})
export class DeviceService
{
  private deviceModelSubject = new BehaviorSubject<DeviceModel>(undefined);

  DeviceModelStream = this.deviceModelSubject.asObservable();

  constructor
  (
    public observableMedia: ObservableMedia
  )
  {
    // console.log('observableMedia:', this.observableMedia);

    // SUBSCRIBE TO MEDIA CHANGE TO RE-EVALUATE DEVICE MODEL...
    observableMedia.subscribe((change: MediaChange) =>
    {
      this.createDeviceModel();
    });
  }

  private createDeviceModel()
  {
    const currentDevice: any = device.noConflict();

    const rawDeviceData =
    {
      isSmall: this.observableMedia.isActive('sm'),
      isMedium: this.observableMedia.isActive('md'),
      isMediumAndUp: this.observableMedia.isActive('md-up'),
      isLarge: this.observableMedia.isActive('lg'),
      isExtraLarge: this.observableMedia.isActive('xl'),
      isExtraLargeAndUp: this.observableMedia.isActive('xl-up'),
      isLandscape: this.observableMedia.isActive('landscape'),
      isPortrait: this.observableMedia.isActive('portrait'),
      isRetina2: this.observableMedia.isActive('retina2'),
      isRetina3: this.observableMedia.isActive('retina3'),
      isMobile: (currentDevice.ios() || currentDevice.android()),
      isDesktop: currentDevice.desktop(),
      isStandalone: this.observableMedia.isActive('standalone')
    };

    const deviceModel: DeviceModel = new DeviceModel(rawDeviceData);

    // console.log('***************** YO', deviceModel);

    this.deviceModelSubject.next(deviceModel);
  }
}
