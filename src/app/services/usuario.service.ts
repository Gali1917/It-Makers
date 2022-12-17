import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Usuario } from '../models/usuario';
import { SignIn } from '../models/signin';

@Injectable({
  providedIn: 'root'
})
//Ruta de acceso al api
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
  editarUsuario(id: string, usuario: Usuario): Observable<any>{
    return this.http.put(this.url + id, usuario);
  }
  iniciarSesion(signIn: SignIn): Observable<any>{
    return this.http.post("http://localhost:5005/api/signin", signIn);
  }
}
