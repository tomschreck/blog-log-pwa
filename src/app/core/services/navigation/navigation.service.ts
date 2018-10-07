import { Injectable } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService
{
  defaultNavigationExtras: NavigationExtras;

  ROUTES =
  {
    Home: '/home',
    Log: '/log',
    Login: '/login',
    Logout: '/logout',
    NoPage404: '/404'
  };

  constructor
  (
    private router: Router
  )
  {
  }

  // LOGOUT
  GoToLogOutPage()
  {
    const url = `${this.ROUTES.Logout}`;
    this.router.navigate([ url ], this.defaultNavigationExtras);
  }


  // HOME
  GoToHomePage()
  {
    const url = `${this.ROUTES.Home}`;
    this.router.navigate([ url ], this.defaultNavigationExtras);
  }


  // CONTACTS
  GoToLogListPage()
  {
    const url = `${this.ROUTES.Log}`;
    this.router.navigate([ url ]);
  }
  GoToLogDetailPage(id: number)
  {
    const url = `${this.ROUTES.Log}/${id}`;
    this.router.navigate([ url ], this.defaultNavigationExtras);
  }
  GoToLogCreatePage()
  {
    const url = `${this.ROUTES.Log}/create`;
    this.router.navigate([ url ], this.defaultNavigationExtras);
  }
}
