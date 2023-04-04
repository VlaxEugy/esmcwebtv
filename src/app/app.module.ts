import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MiniCardComponent } from './home/mini-card/mini-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MiniCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
