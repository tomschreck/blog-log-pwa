import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: [ './about-page.component.scss' ]
})
export class AboutPageComponent implements OnInit
{
  siteNameAndVersion: string;
  copyrightYear: number;

  constructor() { }

  ngOnInit()
  {
    this.siteNameAndVersion = `${environment.name} - ${environment.version}`;
    this.copyrightYear = (new Date()).getFullYear();
  }

}
