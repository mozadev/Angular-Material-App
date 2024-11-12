import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Anexo } from '../interfaces/anexo.interface';
import { environments } from 'src/environments/environments';

@Injectable({providedIn: 'root'})
export class AnexosService {

  private baseUrl: string = environments.baseUrl;

  constructor(private http: HttpClient) { }

  getAnexos(): Observable<Anexo[]>{

    const username = 'admin';
    const password = 'admin';
    const authToken = btoa(`${username}:${password}`);

    const headers = new HttpHeaders({
      'Authorization': `Basic ${authToken}`
    })
    console.log( headers)
   return this.http.get< {data: { data: Anexo[] } } >(`${this.baseUrl}/anexos-upload-dashboard/`, { headers })
  .pipe(
    map(response => response.data.data),
    catchError(error => {
      console.error('Error occurred:', error);
      return throwError(error);
    })
    );
  }

  getAnexoDetail(key_id: string): Observable <any> {
    const authToken = btoa('admin:admin'); 
    const headers = new HttpHeaders({
      'Authorization': `Basic ${authToken}`
    });
    return this.http.get<any>(`${this.baseUrl}/anexos-upload/${key_id}/`, { headers });
  }
}
