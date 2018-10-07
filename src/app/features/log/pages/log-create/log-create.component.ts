import { Component, OnInit } from '@angular/core';
import { LogCreateModel } from '@app/models/log/log-create-model';

@Component({
  selector: 'app-log-create',
  templateUrl: './log-create.component.html',
  styleUrls: [ './log-create.component.scss' ]
})
export class LogCreateComponent implements OnInit
{

  constructor() { }

  ngOnInit()
  {
  }

  onFormSubmit(logCreateModel: LogCreateModel)
  {
    console.log('DAS LOG:', logCreateModel);
  }

  onFormCancel()
  {
  }

}
