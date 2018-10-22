import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService
{
  private connectionMonitor = new BehaviorSubject<boolean>(true);

  ConnectionMonitorStream = this.connectionMonitor.asObservable();

  constructor()
  {
    if (navigator)
    {
      // console.log('WOOBLES2', navigator.onLine);
      this.connectionMonitor.next(navigator.onLine);
    }

    if (window)
    {
      window.addEventListener('offline', () =>
      {
        // console.log('**************** OFFLINE', navigator.onLine);
        this.connectionMonitor.next(false);
      });

      window.addEventListener('online', () =>
      {
        // console.log('**************** ONLINE', navigator.onLine);
        this.connectionMonitor.next(true);
      });
    }
  }
}
