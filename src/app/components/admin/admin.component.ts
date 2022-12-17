import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ReqresService } from 'src/app/services/reqres.service';
import { Reqres } from 'src/app/models/reqres';
import { ToastrService } from 'ngx-toastr';

ReqresService

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers:[ReqresService]
})
export class AdminComponent {
  listarUsuarios: Usuario[] = [];
  listarReqres: Reqres[] = [];
  
  constructor(private _usuarioService: UsuarioService, private _reqresService: ReqresService, private toastr: ToastrService){

  }
  ngOnInit(): void {
    this.obtenerUsuarios();
    this.obtenerReqres();
  }

  obtenerUsuarios(){
    this._usuarioService.getUsuarios().subscribe(data =>{
      console.log(data)
      this.listarUsuarios = data;
    }, error =>{
      console.log(error);
    })
  }

  eliminarUsuario(id: any){
    this._usuarioService.eliminarUsuario(id).subscribe(data =>{
      this.toastr.error('El usuario ha sido eliminado con exito!', 'Usuario eliminado!');
      this. obtenerUsuarios();
    }, error =>{
      console.log(error);
    }
    )
  }

  obtenerReqres(){
    this._reqresService.getReqres().subscribe(result =>{
      console.log(result)
      this.listarReqres = result.data;
    }, error =>{
      console.log(<any>error);
    })
  }
}
