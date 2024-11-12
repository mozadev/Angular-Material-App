import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Anexo } from '../interfaces/anexo.interface';
import { environments } from 'src/environments/environments';

@Injectable({providedIn: 'root'})
export class AnexosService {

  private baseUrl: string = environments.baseUrl;

  constructor(private http: HttpClient) { }

  getAnexos(): Observable<Anexo[]>{
    return this.http.get<Anexo[]>(`${this.baseUrl}/anexos-upload-dashboard`)
  }

}
