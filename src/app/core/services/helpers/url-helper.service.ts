import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlHelperService
{
  // ORCHARD USER
  public static GetPostLogUrl(): string
  {
    return `${environment.API.URL}`;
  }

}
