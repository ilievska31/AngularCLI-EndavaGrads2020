import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ColorComponent } from './color/color.component';
import { NameComponent } from './name/name.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    NameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
