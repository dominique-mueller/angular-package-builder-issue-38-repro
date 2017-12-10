import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FooterModule } from 'my-lib';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
