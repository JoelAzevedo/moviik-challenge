import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { QuotesService } from './shared/quotes.service';
import { QuoteComponent } from './components/quote/quote.component';
import { QuotesListComponent } from './components/quotes-list/quotes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuotesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [QuotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
