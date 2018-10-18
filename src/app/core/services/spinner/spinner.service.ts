import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService
{
  private showSpinnerSubject = new BehaviorSubject<Boolean>(false);

  ShowSpinnerStream = this.showSpinnerSubject.asObservable();

  constructor() { }

  showSpinner(message?: string)
  {
    // console.log('SHOW SPINNER from:', message);
    this.showSpinnerSubject.next(true);
  }

  hideSpinner(message?: string)
  {
    // console.log('HIDE SPINNER from:', message);
    this.showSpinnerSubject.next(false);
  }
}
