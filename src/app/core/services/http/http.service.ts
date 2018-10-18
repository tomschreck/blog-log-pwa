import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { MessageService } from '@core/services/messages/message.service';
import { NavigationService } from '@core/services/navigation/navigation.service';
import { SpinnerService } from '@app/core/services/spinner/spinner.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService
{

  constructor
  (
    private http: HttpClient,
    private messageService: MessageService,
    private navigationService: NavigationService,
    private spinnerService: SpinnerService
  )
  {
  }

  Get(url: string, options?: {}): Observable<any>
  {
    const headers = this.setHeaders(options);

    return Observable.create(observer =>
    {
      this.http.get(url, { headers: headers })
        .pipe
        (
        take(1)
        )
        .subscribe
        (
          (data) =>
          {
            observer.next(data);
            observer.complete();
          },
          (err: HttpErrorResponse) =>
          {
            this.handleError(err, observer);
          }
        );
    });
  }

  Post(url: string, data?: any, options?: {}): Observable<any>
  {
    const headers = this.setHeaders(options);

    return Observable.create(observer =>
    {
      this.http.post(url, data, { headers: headers })
        .pipe
        (
        take(1)
        )
        .subscribe
        (
          (results) =>
          {
            observer.next(results);
            observer.complete();
          },
          (err: HttpErrorResponse) =>
          {
            this.handleError(err, observer);
          }
        );
    });
  }

  Put(url: string, data?: any, options?: {}): Observable<any>
  {
    const headers = this.setHeaders(options);

    return Observable.create(observer =>
    {
      this.http.put(url, data, { headers: headers })
        .pipe
        (
        take(1)
        )
        .subscribe
        (
          (results) =>
          {
            observer.next(results);
            observer.complete();
          },
          (err: HttpErrorResponse) =>
          {
            this.handleError(err, observer);
          }
        );
    });
  }

  Delete(url: string, options?: {}): Observable<any>
  {
    const headers = this.setHeaders(options);

    return Observable.create(observer =>
    {
      this.http.delete(url, { headers: headers })
        .pipe
        (
        take(1)
        )
        .subscribe
        (
          (results) =>
          {
            observer.next(results);
            observer.complete();
          },
          (err: HttpErrorResponse) =>
          {
            this.handleError(err, observer);
          }
        );
    });
  }

  GetSilentRequestHeader()
  {
    return { 'X-Silent-Request': true };
  }


  private handleError(err: HttpErrorResponse, observer: any)
  {
    // console.log('WTF HAPPENED????', err);

    if (err.error instanceof Error)
    {
      console.log('Client-side error occured.');
      observer.error(err);
      observer.complete();
    }
    else
    {
      if (err.status === 401)
      {
        const title = 'Unauthorized Request';
        const message = 'You are not authorized to make this request.  Please login again.';

        this.messageService.CreateErrorMessage(title, message)
          .pipe(take(1))
          .subscribe
          (
            () =>
            {
              this.spinnerService.hideSpinner(`1 |spinner interceptor...`);
              this.navigationService.GoToLogOutPage();

              observer.error(err);
              observer.complete();
            }
          );
      }
      else
      {
        const title = this.getErrorTitle(err);
        const message = this.getErrorMessage(err);

        this.messageService.CreateErrorMessage(title, message)
          .pipe(take(1))
          .subscribe
          (
            () =>
            {
              this.spinnerService.hideSpinner(`1 |spinner interceptor...`);
              observer.error(err);
              observer.complete();
            }
          );
      }
    }
  }

  private setHeaders(options?: {}): HttpHeaders
  {
    let headers = new HttpHeaders();

    if (options && options[ 'X-Silent-Request' ] !== undefined)
    {
      headers = headers.set('X-Silent-Request', 'true');
    }

    return headers;
  }

  private getErrorTitle(err: HttpErrorResponse): string
  {
    let title: string = 'Error';

    if (err.error && err.error.ErrorTitle)
    {
      title = err.error.ErrorTitle;
    }
    else
    {
      title = `${err.status}: ${err.statusText}`;
    }

    return title;
  }

  private getErrorMessage(err: HttpErrorResponse): string
  {
    let message: string = 'Ooops, something unforseen has happened.  We didn\'t see that coming.';

    if (err.error && err.error.ErrorDetail)
    {
      message = err.error.ErrorDetail;
    }
    else if (err.error && err.error.Message)
    {
      message = err.error.Message;
    }
    else if (err.message)
    {
      message = err.message;
    }

    return message;
  }
}
