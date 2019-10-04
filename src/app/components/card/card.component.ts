import { Component, OnInit, Input } from '@angular/core';
import { Quote } from 'src/app/system/quote';

@Component({
  selector: 'moviik-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() quote: Quote;

  constructor() { }

  ngOnInit() {
  }

}
