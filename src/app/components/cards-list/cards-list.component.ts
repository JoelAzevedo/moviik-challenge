import { Component, OnInit } from '@angular/core';

import { Quote } from 'src/app/system/quote';
import { QuotesService } from 'src/app/system/services/quotes.service';

@Component({
  selector: 'moviik-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit {

  quotes: Quote[];
  // dummyQuotes: Array<object>;

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
    return this.quotesService.getQuotesByPage(page).subscribe((data) => {
      // console.log(data);
      this.quotes = data;
    });
  }

}
