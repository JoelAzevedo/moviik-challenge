import { Component, OnInit } from '@angular/core';
import { QuotesService } from './shared/quotes.service';
import { Quote } from './shared/quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  quotes: Quote[];
  dummyQuotes: Array<object>;

  constructor(private quotesService: QuotesService) { }

  ngOnInit() {
    // this.loadQuotesByPage(1); // test for page 1

    // Dummy quotes list
    this.quotesService.getDummyQuotes().subscribe(data => {
      this.dummyQuotes = data;
    });
  }

  // Quotes list by page
  loadQuotesByPage(page: number) {
    return this.quotesService.getQuotesByPage(page).subscribe((data) => {
      // console.log(data);
      this.quotes = data;
    });
  }

}
