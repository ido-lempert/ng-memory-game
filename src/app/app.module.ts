import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import {ReactiveFormsModule} from '@angular/forms';
import { FinishBannerComponent } from './finish-banner/finish-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FinishBannerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
