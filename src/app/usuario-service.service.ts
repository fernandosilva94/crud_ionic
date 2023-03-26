import { UsuarioDto } from './usuario-dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { UsuarioModel } from './models/UsuarioModel';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllUsuario() {
    return this.http.get(`${this.apiUrl}/usuario`);
  };

  salvarUsuario(usuario: UsuarioModel): Observable<UsuarioModel> {
    return this.http.post<UsuarioModel>(`${this.apiUrl}/usuario`, usuario);
  };

  editarUsuario(id: number, usuarioDto: UsuarioDto): Observable<UsuarioModel> {
    const url = `${this.apiUrl}/usuario/${id}`;
    return this.http.put<UsuarioModel>(url, usuarioDto);
  }
}
