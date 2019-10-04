import { Component, OnInit, Input } from '@angular/core';
import { Quote } from 'src/app/shared/quote';

@Component({
  selector: 'moviik-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  @Input() quote: Quote;

  constructor() { }

  ngOnInit() {
  }

}
