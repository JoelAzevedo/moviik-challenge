import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError, of } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';

import { Quote } from '../quote';

@Injectable({
  providedIn: 'root'
})

export class QuotesService {

  public responseCache = new Map();

  // Base URL
  baseUrl = 'https://programming-quotes-api.herokuapp.com';

  constructor(private http: HttpClient) { }

  // Get all quotes
  getAllQuotes(): Observable<Quote[]> {
    return this.http.get<Quote[]>(this.baseUrl + '/quotes')
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  // Get quotes by page (cached)
  getQuotesByPage(page: number): Observable<Quote[]> {
    const quotesByPageUrl = this.baseUrl + '/quotes/page/' + page;
    const quotesFromCache = this.responseCache.get(quotesByPageUrl);

    if (quotesFromCache) {
      return of(quotesFromCache);
    }

    return this.http.get<Quote[]>(quotesByPageUrl)
      .pipe(
        retry(1),
        tap(quotes => this.responseCache.set(quotesByPageUrl, quotes)),
        catchError(this.errorHandler)
      );
  }

  // Get a random quote
  getRandomQuote(): Observable<Quote> {
    return this.http.get<Quote>(this.baseUrl + '/quotes/random')
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  // Get a quote by id
  getQuoteById(id: string): Observable<Quote> {
    const url = `${this.baseUrl}/quotes/id/${id}`;

    return this.http.get<Quote>(url).pipe(
      retry(1),
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
