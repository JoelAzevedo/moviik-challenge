import { Component, OnInit, OnDestroy } from '@angular/core';

import { Quote } from 'src/app/system/quote';
import { QuotesService } from 'src/app/system/services/quotes.service';

@Component({
  selector: 'moviik-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit, OnDestroy {

  quotes: Quote[];
  // dummyQuotes: Array<object>;
  private quotesServiceSubscription;

  constructor(private quotesService: QuotesService) { }

  ngOnInit() {
    this.loadQuotesByPage(1); // test for page 1

    // Dummy quotes list
    // this.quotesService.getDummyQuotes().subscribe(data => {
    //   this.dummyQuotes = data;
    // });
  }

  // Quotes list by page
  loadQuotesByPage(page: number) {
    this.quotesServiceSubscription = this.quotesService.getQuotesByPage(page).subscribe((data) => {
      this.quotes = data;
    });
  }

  ngOnDestroy() {
    this.quotesServiceSubscription.unsubscribe();
  }

}
