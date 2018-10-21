import { Component, OnInit } from '@angular/core';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ScrollService } from '@app/core/services/scroll/scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit
{
  constructor
  (
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string,
    private scrollService: ScrollService
  ) {}

  ngOnInit()
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
