import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { Scavenger } from '@wishtack/rx-scavenger';

import { SpinnerService } from '@core/services/spinner/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: [ './spinner.component.scss' ]
})
export class SpinnerComponent implements OnInit, OnDestroy
{
  private _scavenger = new Scavenger(this);

  @HostBinding('class.active') private isSpinnerActive: boolean;

  constructor
  (
    private spinnerService: SpinnerService
  )
  {
  }

  ngOnInit()
  {
    this.spinnerService.ShowSpinnerStream
        .pipe(this._scavenger.collect())
        .subscribe
        (
          (isActive: boolean) =>
          {
            this.isSpinnerActive = isActive;
          }
        );
  }

  ngOnDestroy()
  {
  }

}
