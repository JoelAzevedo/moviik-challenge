import { Component, OnInit, OnDestroy } from '@angular/core';

import { Quote } from 'src/app/system/quote';
import { QuotesService } from 'src/app/system/services/quotes.service';

@Component({
  selector: 'moviik-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit, OnDestroy {

  private quotesServiceSubscription;

  quotes: Quote[];
  currentPage: number;

  constructor(private quotesService: QuotesService) { }

  ngOnInit() {
    this.currentPage = 1; // by default we fetch all quotes from page one
    this.loadQuotesByPage(this.currentPage);
  }

  // Quotes list by page
  loadQuotesByPage(page: number) {
    this.quotesServiceSubscription = this.quotesService.getQuotesByPage(page).subscribe((data) => {
      this.quotes = data;
    });
  }

  nextPage() {
    this.currentPage++;
    this.loadQuotesByPage(this.currentPage);
    console.log(this.currentPage);
  }

  previousPage() {
    if (this.currentPage >= 1) {
      this.currentPage--;
      this.loadQuotesByPage(this.currentPage);
      console.log(this.currentPage);
    }
  }

  ngOnDestroy() {
    this.quotesServiceSubscription.unsubscribe();
  }

}
