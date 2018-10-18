import { Injectable } from '@angular/core';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { HttpService } from '@app/core/services/http/http.service';
import { LogCreateModel } from '@app/models/log/log-create-model';
import { UrlHelperService } from '@app/core/services/helpers/url-helper.service';
import { MessageService } from '@app/core/services/messages/message.service';


@Injectable({
  providedIn: 'root'
})
export class LogService
{

  constructor
  (
    private httpService: HttpService,
    private messageService: MessageService
  )
  {
  }

  CreateLog(logCreateModel: LogCreateModel): Observable<LogCreateModel>
  {
    const url = UrlHelperService.GetPostLogUrl();

    const data =
    {
      title: logCreateModel.Title,
      blogTypeId: logCreateModel.BlogType,
      shortDescription: logCreateModel.ShortDescription,
      longDescription: logCreateModel.LongDescription,
      tagList: logCreateModel.TagList
    };

    const formData: FormData = new FormData();

    logCreateModel.ImageList.map((item: File) =>
    {
      formData.append('blogFile', item, item.name);
    });

    formData.append('data', JSON.stringify(data));

    return this.httpService.Post(url, formData)
      .pipe
      (
        mergeMap(() => this.messageService.CreateSuccessMessage('Success', `Successfully created blog entry.`)),
        map(() =>
        {
          return logCreateModel;
        }),
        catchError( (err) => throwError(err) )
      );
  }
}
