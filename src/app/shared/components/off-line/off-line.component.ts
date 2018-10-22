import { Component, OnInit, HostBinding } from '@angular/core';
import { ConnectionService } from '@app/core/services/connection-service/connection.service';

@Component({
  selector: 'app-off-line',
  templateUrl: './off-line.component.html',
  styleUrls: [ './off-line.component.scss' ]
})
export class OffLineComponent implements OnInit
{
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
    .subscribe
    (
      (isConnected) =>
      {
        this.isConnected = isConnected;
      }
    );
  }
}
