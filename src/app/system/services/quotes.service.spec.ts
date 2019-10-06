import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { QuotesService } from './quotes.service';

describe('QuotesService', () => {

  let httpMock: HttpTestingController;
  let quotesService: QuotesService;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [QuotesService]
    });

    quotesService = TestBed.get(QuotesService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: QuotesService = TestBed.get(QuotesService);
    expect(service).toBeTruthy();
  });

  it('getQuotesByPage(1) should http GET quotes for page 1', () => {

    const quotes = [
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
      }
    ];

    quotesService.getQuotesByPage(1).subscribe((res) => {
      expect(res).toEqual(quotes);
    });

    const req = httpMock.expectOne('https://programming-quotes-api.herokuapp.com/quotes/page/1');
    expect(req.request.method).toEqual('GET');
    req.flush(quotes);

    httpMock.verify();

  });
});
