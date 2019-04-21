/*pastebin.service.ts */
import { Injectable } from '@angular/core';
import { Pastebin } from './pastebin';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class PastebinService {

// The project uses InMemoryWebApi to handle the Server API.
// Here "api/pastebin" simulates a Server API url
  private pastebinUrl = 'api/pastebin';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  // getPastebin() performs http.get() and returns a promise
  public getPastebin(): Observable<any> {
    return this.http.get(this.pastebinUrl, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

    // addPaste() creates new pastes
  public addPaste(pastebin: Pastebin): Observable<any>  {
    return this.http.post(this.pastebinUrl, pastebin, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  // updatePaste() creates new pastes
  public updatePaste(paste: Pastebin): Observable<any>  {
    const url = `${this.pastebinUrl}/${paste.id}`;

    return this.http.put(url, paste, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  // deletePaste() creates new pastes
  public deletePaste(pastebin: Pastebin): Observable<any>  {
    const url = `${this.pastebinUrl}/${pastebin.id}`;

    return this.http.delete(url, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }


  private handleError(error: any, caught: Observable<object>): Observable<any> {
    console.error('An error occurred', error);

    return of(null);
  }
}
