import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUsuario() {
    return this.http.get(`${this.apiUrl}/usuario`);
  };
}
