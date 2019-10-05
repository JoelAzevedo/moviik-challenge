import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'moviik-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  @Input() score;
  @Input() maxScore = 5;

  range = [];

  constructor() { }

  ngOnInit() {
    this.getRatingRange();
  }

  getRatingRange() {
    for (let i = 0; i < this.maxScore; i++) {
      this.range.push(i);
    }
  }

  isMarked(index: number) {
    if (this.score >= index + 1) {
      return 'fa-star';
    } else if (this.score > index && this.score < index + 1) {
      return 'fa-star-half-o';
    } else {
      return 'fa-star-o';
    }
  }

}
