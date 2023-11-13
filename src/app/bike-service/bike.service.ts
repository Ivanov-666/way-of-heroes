import { Injectable } from '@angular/core';
import { Bike } from '../Bike';
import { Observable, of } from 'rxjs';
import { MessageService } from '../message-service/message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class BikeService {

  private bikesUrl = 'api/bikes';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private messageService: MessageService) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`BikeService: ${message}`);
  }

  getBikes(): Observable<Bike[]> {
    return this.http.get<Bike[]>(this.bikesUrl).pipe(
      tap(_ => this.log('fetched bikes')),
      catchError(this.handleError<Bike[]>('getBikes', []))
    );
  }

  getBike(id: number ): Observable<Bike> {
    return this.http.get<Bike>(this.bikesUrl+`/${id}`).pipe(
      tap(_ => this.log(`fetched bike id=${id}`)),
      catchError(this.handleError<Bike>(`getBike id=${id}`))
    );
  }

  saveBike(bike: Bike | null):  Observable<any> {
    return this.http.put(this.bikesUrl, bike, this.httpOptions).pipe(
      tap(_ => this.log(`updated bike id=${bike?.id}`)),
      catchError(this.handleError<any>('updateBike'))
    );
  }
  addBike(bike: Bike):  Observable<Bike> {
    return this.http.post<Bike>(this.bikesUrl, bike, this.httpOptions).pipe(
      tap(newBike => this.log(`added bike id=${newBike.id}`)),
      catchError(this.handleError<any>('addBike'))
    );
  }
  deleteBike(bike: Bike):  Observable<Bike> {
    const id = bike.id;
    const url = `${this.bikesUrl}/${id}`;

    return this.http.delete<Bike>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted bike id=${bike.id}`)),
      catchError(this.handleError<Bike>('deleteBike'))
    );
  }
  searchBikes(term: string): Observable<Bike[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Bike[]>(`${this.bikesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found bikes matching "${term}"`)),
      catchError(this.handleError<Bike[]>('searchBikes', []))
    );
  }

}
