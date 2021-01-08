import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from './model/data.model';
import { HttpClient } from '@angular/common/http';
import { shareReplay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data$: Observable<Data[]>;
  private data: Data[];
  public constructor(private http: HttpClient) {
    this.data$ = http.get('./assets/data.json').pipe(
      tap(console.log),
      shareReplay(1),
      tap(() => console.log('after sharing'))
    );
  }

  getData() : Observable<Data[]> {

   return this.data$;
  }
}
