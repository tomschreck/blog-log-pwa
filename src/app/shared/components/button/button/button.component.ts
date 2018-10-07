import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: [ './button.component.scss' ]
})
export class ButtonComponent implements OnInit
{
  @Input() text: string;
  @Input() color: string;
  @Input() fontSet: string;
  @Input() fontIcon: string;

  @Output('onClick') ClickEventEmitter: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit()
  {
    this.text = this.text || 'Submit';
    this.color = this.color || 'primary';
  }

  onClick()
  {
    if (this.ClickEventEmitter.observers.length > 0 )
    {
      this.ClickEventEmitter.emit();
    }
  }
}
