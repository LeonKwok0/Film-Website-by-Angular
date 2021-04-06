import { Component, OnInit, Injectable, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of, OperatorFunction } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, map, tap, switchMap } from 'rxjs/operators';

// const URL = 'http://localhost:3001/search?query=';
const URL = '/search?query=';


@Injectable()
export class searchService {
  constructor(private http: HttpClient) { }

  search(term: string) {
    if (term === '') {
      return of([]);
    }
    
    return this.http
      .get<[any, string[]]>(URL+term).pipe(
        map(resp =>resp.slice(0,7))
      );
  }
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  providers: [searchService],
  styleUrls: ['./header.component.css'],
  encapsulation:ViewEncapsulation.None
})


export class HeaderComponent implements OnInit {



  constructor(private _service: searchService) { }

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term =>
        this._service.search(term)
      )
    )

  ngOnInit(): void {
  }

}
