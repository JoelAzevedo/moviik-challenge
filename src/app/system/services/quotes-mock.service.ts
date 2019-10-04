import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuotesMockService {

  dummyQuotes: Array<object> = [
    {
      rating: 3,
      _id: '1',
      sr: 'Računarska nauka se tiče računara koliko i astronomija teleskopa.',
      en: 'Computer Science is no more about computers than astronomy is about telescopes.',
      author: 'Edsger W. Dijkstra'
    },
    {
      rating: 5,
      _id: '2',
      // tslint:disable-next-line: max-line-length
      sr: 'Kako ubediti ljude da u programiranju jednostavnost i jasnoća — što matematičari zovu "elegancija" — nisu nepriuštiv luksuz, već ključna stvar koja odlučuje između uspeha i propasti? ',
      // tslint:disable-next-line: max-line-length
      en: 'How do we convince people that in programming simplicity and clarity — in short: what mathematicians call "elegance" — are not a dispensable luxury, but a crucial matter that decides between success and failure? ',
      author: 'Edsger W. Dijkstra'
    },
    {
      rating: 5,
      _id: '3',
      sr: 'Ako je debagovanje proces uklanjanja bagova, onda programiranje mora biti proces njihovog umetanja.',
      en: 'If debugging is the process of removing software bugs, then programming must be the process of putting them in.',
      author: 'Edsger W. Dijkstra'
    },
    {
      rating: 2.5,
      _id: '4',
      sr: 'Ponekad postoji srebrni metak softverske produktivnosti. Ali treba da upucate pravu osobu. ',
      en: 'Sometimes there is a silver bullet for boosting software engineering productivity. But you need to shoot the right person.',
      author: 'Edsger W. Dijkstra'
    },
    {
      rating: 5,
      _id: '5',
      sr: 'Računarska nauka se tiče računara koliko i astronomija teleskopa.',
      en: 'What one programmer can do in one month, two programmers can do in two months.',
      author: 'Fred Brooks'
    },
    {
      rating: 4.1,
      _id: '6',
      // tslint:disable-next-line: max-line-length
      sr: 'Lepota je važnija u računarstvu nego igde drugde u tehnologiji, zato što je softver tako složen. Lepota je ultimativna odbrana od složenosti.',
      // tslint:disable-next-line: max-line-length
      en: 'Beauty is more important in computing than anywhere else in technology because software is so complicated. Beauty is the ultimate defense against complexity. ',
      author: 'David Gelernter'
    },
    {
      rating: 4.6,
      _id: '7',
      sr: 'Dodavanje ljudstva na projekat koji kasni dovodi do još većeg kašnjenja.',
      en: 'Adding manpower to a late software project makes it later.',
      author: 'Fred Brooks'
    }
  ];

  constructor() { }

  // Get some dummy quotes
  getDummyQuotes() {
    return of(this.dummyQuotes);
  }
}
