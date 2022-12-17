import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ReqresService } from 'src/app/services/reqres.service';
import { Reqres } from 'src/app/models/reqres';
import { ToastrService } from 'ngx-toastr';

ReqresService

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css'],
  providers: [ReqresService]
})
export class ListarUsuariosComponent implements OnInit {
  listarUsuarios: Usuario[] = [];
  listarReqres: Reqres[] = [];

  constructor(private _usuarioService: UsuarioService, private _reqresService: ReqresService, private toastr: ToastrService) {

  }
  ngOnInit(): void {
    this.obtenerUsuarios();
    this.obtenerReqres();
  }

  //Listar todos los usuarios registrados
  obtenerUsuarios() {
    this._usuarioService.getUsuarios().subscribe(data => {
      this.listarUsuarios = data;
    }, error => {
      console.log(error);
    })
  }

  //Listar todos los usuarios del API reqres
  obtenerReqres() {
    this._reqresService.getReqres().subscribe(result => {
      this.listarReqres = result.data;
    }, error => {
      console.log(<any>error);
    })
  }
}
