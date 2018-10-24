import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import { VERSION } from '@env/version';

import { DeviceService } from '@app/core/services/device/device.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: [ './about-page.component.scss' ]
})
export class AboutPageComponent implements OnInit
{
  siteNameAndVersion: string;
  copyrightYear: number;

  constructor
  (
    public deviceService: DeviceService
  )
  {
  }

  ngOnInit()
  {
    this.siteNameAndVersion = `${environment.name} - ${VERSION.version}`;
    this.copyrightYear = (new Date()).getFullYear();
  }

}
