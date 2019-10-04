import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError, of } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';

import { Quote } from '../quote';

@Injectable({
  providedIn: 'root'
})

export class QuotesService {

  // Base URL
  baseUrl = 'https://programming-quotes-api.herokuapp.com';

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

  constructor(private http: HttpClient) { }

  // Get all quotes
  getAllQuotes(): Observable<Quote[]> {
    return this.http.get<Quote[]>(this.baseUrl + '/quotes')
      .pipe(
        retry(1),
        tap(_ => console.log('fetched all quotes')),
        catchError(this.errorHandler)
      );
  }

  // Get quotes by page
  getQuotesByPage(page: number): Observable<Quote[]> {
    return this.http.get<Quote[]>(this.baseUrl + '/quotes/page/' + page)
      .pipe(
        retry(1),
        tap(_ => console.log('fetched quotes per page')),
        catchError(this.errorHandler)
      );
  }

  // Dummy quotes (mock API)
  getDummyQuotes() {
    return of(this.dummyQuotes);
  }

  // Get a random quote
  getRandomQuote(): Observable<Quote> {
    return this.http.get<Quote>(this.baseUrl + '/quotes/random')
      .pipe(
        retry(1),
        tap(_ => console.log('fetched a random quote')),
        catchError(this.errorHandler)
      );
  }

  // Get a quote by id
  getQuoteById(id: string): Observable<Quote> {
    const url = `${this.baseUrl}/quotes/id/${id}`;

    return this.http.get<Quote>(url).pipe(
      tap(_ => console.log(`fetched quote id=${id}`)),
      catchError(this.errorHandler)
    );
  }

  // Error handler
  private errorHandler(error) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    console.log(errorMessage);

    return throwError(errorMessage);
  }

}
