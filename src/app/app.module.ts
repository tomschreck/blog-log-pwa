import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// application
import { AuthModule } from '@app/features/auth/auth.module';
import { CoreModule } from '@app/core/core.module';
import { Four04Module } from '@app/features/four04/four04.module';
import { MaterialModule } from '@app/material/material.module';
import { SharedModule } from '@app/shared/shared.module';

import { CONFIG } from '@env/configuration';

// interceptors
import { SpinnerInterceptor } from '@core/interceptors/spinner.interceptor';

// 3rd PARTY
import { AgmCoreModule } from '@agm/core';
import { NgxModelModule } from 'ngx-model';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports:
    [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      HttpClientModule,
      ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),

      // application
      AuthModule,
      CoreModule,
      Four04Module,
      MaterialModule,
      SharedModule,

      // 3rd PARTY
      AgmCoreModule.forRoot({ apiKey: CONFIG.KEYS.GoogleMap }),
      NgxModelModule,
      ToastrModule.forRoot
        (
        {
          closeButton: true,
          maxOpened: 1,
          timeOut: 5000,
          positionClass: 'toast-center-center',
          progressBar: true,
          progressAnimation: 'decreasing',
          preventDuplicates: true,
        }
        )
    ],
  declarations:
    [
      AppComponent
    ],
  providers:
    [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: SpinnerInterceptor,
        multi: true
      },
      // {
      //   provide: HTTP_INTERCEPTORS,
      //   useClass: TokenInterceptor,
      //   multi: true
      // }
    ],
  bootstrap:
    [
      AppComponent
    ]
})
export class AppModule { }
