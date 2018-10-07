import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-buttons',
  templateUrl: './form-buttons.component.html',
  styleUrls: [ './form-buttons.component.scss' ]
})
export class FormButtonsComponent implements OnInit
{
  IsCancelVisible: boolean = false;

  @Input() submitButtonText: string;
  @Input() isNotDisabled: boolean;
  @Output('onCancelForm') CancelFormEventEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit()
  {
    this.submitButtonText = (this.submitButtonText) ? this.submitButtonText : 'Submit';
    this.IsCancelVisible = (this.CancelFormEventEmitter.observers.length > 0);
  }

  onCancelForm()
  {
    if (this.CancelFormEventEmitter.observers.length > 0)
    {
      this.CancelFormEventEmitter.emit(true);
    }
  }
}
