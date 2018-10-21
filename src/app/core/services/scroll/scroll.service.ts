import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService
{
  constructor()
  {}

  scrollToTop()
  {
    this.scrollToPosition(0, 0);
  }

  scrollToPosition(x?: number, y?: number)
  {
    window.scrollTo( x, y );
  }
}
