import { Directive, Input, ElementRef, OnInit, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appAutofocus]'
})
export class AutofocusDirective implements OnInit, AfterViewInit
{
  @Input() appAutofocus: boolean;
  private el: any;

  constructor
  (
    private elementRef: ElementRef,
  )
  {
    this.el = this.elementRef.nativeElement;
  }

  ngOnInit()
  {
  }

  ngAfterViewInit()
  {
    setTimeout(() => {
      this.el.focus();
    });
  }
}
