import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MentionModule } from 'angular-mentions';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MentionModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
