import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {

  /** We need to add 'provideHttpClient()' to the providers array in app.config.ts
  * to make this service 'HttpClient' injectable. 
  */
  
  constructor(private http: HttpClient) {}

  // Api URL
  private apiUrl = 'http://gateway.marvel.com/v1/public/characters?apikey=df03247ee261536af9dbbac9108688e5&hash=fd2172c9e8304efc17fc528b59d58eee&ts=1';

  /**
   * This method returns all characters with the api.
   * Besides, it maps the response to return only the data we need
   * @param limit number of characters to return
   * @param offset number of characters to skip
   * @returns any characters
   */

  getAllCharacters(limit: number, offset: number): Observable<any> {

    let params = new HttpParams();
    params = params.append('limit', limit.toString());
    params = params.append('offset', offset.toString());

    return this.http.get<any>(this.apiUrl, {params}).pipe(
      map(response => response.data.results)
    );
  }
}
