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
  serviceErrors: string;

  // Interface text
  // This could/should be moved to a translation service
  titleText = 'Programming Quotes';
  nextPageText = 'Next page';
  previousPageText = 'Previous page';
  errorText = 'And error occurred. Hover for details.';

  constructor(private quotesService: QuotesService) { }

  ngOnInit() {
    this.currentPage = 1; // by default we fetch all quotes from page one
    this.loadQuotesByPage(this.currentPage);
  }

  // Quotes list by page
  loadQuotesByPage(page: number) {
    this.quotesServiceSubscription = this.quotesService.getQuotesByPage(page).subscribe((data) => {
      this.quotes = data;
    },
      error => {
        this.serviceErrors = error;
      }
    );
  }

  nextPage() {
    this.currentPage++;
    this.loadQuotesByPage(this.currentPage);
  }

  previousPage() {
    if (this.currentPage >= 1) {
      this.currentPage--;
      this.loadQuotesByPage(this.currentPage);
    }
  }

  ngOnDestroy() {
    this.quotesServiceSubscription.unsubscribe();
  }

}
