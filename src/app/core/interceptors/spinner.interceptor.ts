import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, timer, Subscription } from 'rxjs';
import { take, tap, finalize } from 'rxjs/operators';

import { SpinnerService } from '@core/services/spinner/spinner.service';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor
{
  private requestLog: string[] = [];

  constructor
  (
    private spinnerService: SpinnerService
  )
  {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
  {
    const keys =  req.headers.keys();
    const isSilent: boolean = keys.includes('X-Silent-Request');

    // console.log('isSilent', isSilent, keys);

    // ADD URL TO LOG IF IT'S NOT SILENT
    if (!isSilent)
    {
      this.requestLog.push(req.url);
    }

    //  IF FIRST REQUEST, THEN SHOW SPINNER
    if (this.requestLog.length === 1)
    {
      // console.log('SHOW SPINNER', this.requestLog);
      this.spinnerService.showSpinner(`0 |spinner interceptor... ${req.url}`);
    }

    return next.handle(req)
      .pipe
      (
        tap(res =>
          {
            if (res instanceof HttpResponse)
            {
              this.requestLog = this.requestLog.filter(e => e !== res.url);
              // console.log(this.requestLog);
            }
          }
        ),
        finalize(() =>
        {
          if (this.requestLog.length <= 0)
          {
            // console.log('HIDE SPINNER', this.requestLog);
            this.spinnerService.hideSpinner(`0 |spinner interceptor... ${req.url}`);
          }
        })
      );
  }
}
