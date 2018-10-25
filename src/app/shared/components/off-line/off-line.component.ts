import { Component, OnInit, HostBinding, OnDestroy } from '@angular/core';
import { ConnectionService } from '@app/core/services/connection-service/connection.service';
import { Scavenger } from '@wishtack/rx-scavenger';

@Component({
  selector: 'app-off-line',
  templateUrl: './off-line.component.html',
  styleUrls: [ './off-line.component.scss' ]
})
export class OffLineComponent implements OnInit, OnDestroy
{
  private _scavenger = new Scavenger(this);

  @HostBinding('class.hidden') isConnected: boolean = true;

  constructor
  (
    private connectionService: ConnectionService
  )
  {
  }

  ngOnInit()
  {
    this.connectionService.ConnectionMonitorStream
        .pipe(this._scavenger.collect())
        .subscribe
        (
          (isConnected: boolean) =>
          {
            this.isConnected = isConnected;
          }
        );
  }

  ngOnDestroy()
  {
  }
}
