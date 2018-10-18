import { Component, OnInit } from '@angular/core';
import { LogCreateModel } from '@app/models/log/log-create-model';
import { LogService } from '@app/features/log/services/log-service/log.service';
import { NavigationService } from '@app/core/services/navigation/navigation.service';

@Component({
  selector: 'app-log-create',
  templateUrl: './log-create.component.html',
  styleUrls: [ './log-create.component.scss' ]
})
export class LogCreateComponent implements OnInit
{

  constructor
  (
    private logService: LogService,
    private navigationService: NavigationService
  )
  {
  }

  ngOnInit()
  {
  }

  onFormSubmit(logCreateModel: LogCreateModel)
  {
    // console.log('DAS LOG:', logCreateModel);

    this.logService.CreateLog(logCreateModel)
        .subscribe
        (
          () =>
          {
            this.navigationService.GoToHomePage();
          }
        );
  }

  onFormCancel()
  {
    this.navigationService.GoToHomePage();
  }
}
