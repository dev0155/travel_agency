import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule, ActionReducerMap } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import store, { AppState } from 'src/store';
import { LayoutModule } from 'src/modules/layout/layout.module';
import { AuthModule } from 'src/modules/auth/auth.module';
import { AuthInterceptor } from 'src/services/auth.interceptor';

export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<AppState>>(
  'Registered Reducer'
);

export function getReducers() {
  return {
    ...store,
  };
}
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    AuthModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(REDUCER_TOKEN),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    { provide: REDUCER_TOKEN, useFactory: getReducers },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
