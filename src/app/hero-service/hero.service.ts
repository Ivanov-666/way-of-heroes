import { Injectable } from '@angular/core';
import { Bike } from '../Bike';
import { Observable, of } from 'rxjs';
import { MessageService } from '../message-service/message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  private heroesUrl = 'api/bikes';

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

  getHeroes(): Observable<Bike[]> {
    return this.http.get<Bike[]>(this.heroesUrl).pipe(
      tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<Bike[]>('getHeroes', []))
    );
  }

  getHero(id: number ): Observable<Bike | null> {
    return this.http.get<Bike>(this.heroesUrl+`/${id}`).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Bike>(`getHero id=${id}`))
    );
  }

  saveHero(hero: Bike| null):  Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero?.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }
  addHero(hero: Bike):  Observable<Bike> {
    return this.http.post<Bike>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(newHero => this.log(`added hero id=${newHero.id}`)),
      catchError(this.handleError<any>('addHero'))
    );
  }
  deleteHero(hero: Bike):  Observable<Bike> {
    const id = hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Bike>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${hero.id}`)),
      catchError(this.handleError<Bike>('deleteHero'))
    );
  }
  searchHeroes(term: string): Observable<Bike[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Bike[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Bike[]>('searchHeroes', []))
    );
  }

}
