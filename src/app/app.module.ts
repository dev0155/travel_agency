import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from 'src/modules/layout/layout.module';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  StoreModule,
  ActionReducerMap,
  ActionReducer,
  Action,
} from '@ngrx/store';
import store, { AppState } from 'src/store';
import { NgModule, InjectionToken } from '@angular/core';
import { AuthModule } from 'src/modules/auth/auth.module';

export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<AppState>>(
  'Registered Reducer'
);

export function getReducers() {
  return {
    ...store,
  };
}
// import store from 'src/store';
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
    EffectsModule.forRoot([]),
  ],
  providers: [{ provide: REDUCER_TOKEN, useFactory: getReducers }],
  bootstrap: [AppComponent],
})
export class AppModule {}
