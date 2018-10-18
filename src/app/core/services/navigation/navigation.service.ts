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
    Blog: '/blog',
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


  // BLOG
  GoToBlogListPage()
  {
    const url = `${this.ROUTES.Blog}`;
    this.router.navigate([ url ]);
  }
  GoToBlogDetailPage(id: number)
  {
    const url = `${this.ROUTES.Blog}/${id}`;
    this.router.navigate([ url ], this.defaultNavigationExtras);
  }
  GoToBlogCreatePage()
  {
    const url = `${this.ROUTES.Blog}/create`;
    this.router.navigate([ url ], this.defaultNavigationExtras);
  }
}
