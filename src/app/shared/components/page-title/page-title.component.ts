import { Component, OnInit, Input, ContentChild, ElementRef, AfterContentInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: [ './page-title.component.scss' ]
})
export class PageTitleComponent implements OnInit, AfterContentInit
{
  hasContent = false;

  @Input('page-title') PageTitle: string;
  @ViewChild('wrapper') wrapper: ElementRef;

  constructor() { }

  ngOnInit()
  {
  }

  ngAfterContentInit()
  {
    this.hasContent = this.wrapper.nativeElement.children.length > 0;
  }

}
