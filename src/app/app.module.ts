import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MainNewsComponent } from './components/main-news/main-news.component';
import { CardComponent } from './components/card/card.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { CardLabelComponent } from './components/card-label/card-label.component';
import { CardPriceComponent } from './components/card-price/card-price.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    MainNewsComponent,
    CardComponent,
    BigCardComponent,
    CardLabelComponent,
    CardPriceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
