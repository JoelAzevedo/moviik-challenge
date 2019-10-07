import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';

import { Quote } from 'src/app/system/quote';
import { QuotesService } from 'src/app/system/services/quotes.service';

@Component({
  selector: 'moviik-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('366ms cubic-bezier(0.4,0.0,0.2,1)', style({ opacity: 1 }))
      ])
    ])
  ]
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
  firstPageText = 'Back to first page';
  errorText = 'And error has occurred. Hover for details.';

  constructor(private quotesService: QuotesService) { }

  ngOnInit() {
    this.firstPage(); // Loads page one at the beginning
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

  firstPage() {
    this.currentPage = 1;
    this.loadQuotesByPage(this.currentPage);
  }

  ngOnDestroy() {
    this.quotesServiceSubscription.unsubscribe();
  }

}
