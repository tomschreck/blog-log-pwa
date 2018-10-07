import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import { CONFIG } from '@env/configuration';

@Injectable({
  providedIn: 'root'
})
export class MessageService
{
  constructor
    (
    private toastr: ToastrService,
  )
  {
  }

  CreateSuccessMessage(title: string, message: string): Observable<any>
  {
    return Observable.create(observer =>
    {
      const activeToast = this.toastr.success(message, title,
        {
          timeOut: CONFIG.SETTINGS.TOAST_LIFE,
          enableHtml: true
        });

      // COMPLETE OBSERVER ONCE TOAST CLOSES...
      if (activeToast)
      {
        activeToast.onHidden.subscribe
          (
            () =>
            {
              observer.next();
              observer.complete();
            }
          );
      }
    });
  }


  CreateInfoMessage(title: string, message: string): Observable<any>
  {
    return Observable.create(observer =>
    {
      const activeToast = this.toastr.info(message, title,
        {
          disableTimeOut: true,
          enableHtml: true
        });

      // COMPLETE OBSERVER ONCE TOAST CLOSES...
      if (activeToast)
      {
        activeToast.onHidden.subscribe
          (
            () =>
            {
              observer.next();
              observer.complete();
            }
          );
      }
    });
  }


  CreateWarningMessage(title: string, message: string): Observable<any>
  {
    return Observable.create(observer =>
    {
      const activeToast = this.toastr.warning(message, title,
        {
          disableTimeOut: true,
          enableHtml: true
        });

      // COMPLETE OBSERVER ONCE TOAST CLOSES..
      if (activeToast)
      {
        activeToast.onHidden.subscribe
          (
            () =>
            {
              observer.next();
              observer.complete();
            }
          );
      }
    });
  }


  CreateErrorMessage(title: string, message: string): Observable<any>
  {
    return Observable.create(observer =>
    {
      const activeToast = this.toastr.error(message, title,
        {
          disableTimeOut: true,
          enableHtml: true
        });

      // COMPLETE OBSERVER ONCE TOAST CLOSES...
      if (activeToast)
      {
        activeToast.onHidden.subscribe
          (
            () =>
            {
              observer.next();
              observer.complete();
            }
          );
      }
    });
  }
}
