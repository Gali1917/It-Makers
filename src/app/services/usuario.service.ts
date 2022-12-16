import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url = "http://localhost:5005/api/usuarios/";

  constructor(private http: HttpClient) {

  }
  getUsuarios(): Observable<any>{
    return this.http.get(this.url);
  }
  eliminarUsuario(id: string): Observable<any>{
    return this.http.delete(this.url + id);
  }
  nuevoUsuario(usuario: Usuario): Observable<any>{
    return this.http.post(this.url, usuario);
  }
  obtenerUsuario(id: string): Observable<any>{
    return this.http.get(this.url + id);
  }
}
