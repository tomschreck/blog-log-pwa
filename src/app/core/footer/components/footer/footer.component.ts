import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '@app/core/services/connection-service/connection.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: [ './footer.component.scss' ]
})
export class FooterComponent implements OnInit
{
  isConnected: boolean = true;

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
          console.log('FOOTER IS CONNECTED:', this.isConnected);
        }
      );
  }

}
