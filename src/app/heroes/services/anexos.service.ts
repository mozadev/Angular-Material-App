import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Anexo } from '../interfaces/anexo.interface';
import { environments } from 'src/environments/environments';
import { AnexoDetail } from '../interfaces/anexoDetail.interface';

interface AnexosResponse {
  count: number;
  up: number;
  down: number;
  up_rate: string;
  down_rate: string;
  data: Anexo[];
}

@Injectable({providedIn: 'root'})
export class AnexosService {

  private baseUrl: string = environments.baseUrl;

  constructor(private http: HttpClient) { }

  getAnexos(): Observable<AnexosResponse>{

    const username = 'admin';
    const password = 'admin';
    const authToken = btoa(`${username}:${password}`);

    const headers = new HttpHeaders({
      'Authorization': `Basic ${authToken}`
    });
    return this.http.get<{ data: AnexosResponse }>(`${this.baseUrl}/anexos-upload-dashboard/`, { headers }).pipe(
      map(response => response.data), // Map to only the inner `data` object
      catchError(error => throwError(error))
    );
  }

  getAnexoDetail(key_id: string): Observable <{ duration_hrs: string; data: AnexoDetail[] }> {
    const authToken = btoa('admin:admin');
    const headers = new HttpHeaders({
      'Authorization': `Basic ${authToken}`
    });
    return this.http.get<{ duration_hrs: string; data: AnexoDetail[] }>(`${this.baseUrl}/anexos-upload/${key_id}/`, { headers });
  }
}
