import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { ReqresService } from 'src/app/services/reqres.service';
import { Reqres } from 'src/app/models/reqres';
import { ToastrService } from 'ngx-toastr';

ReqresService

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[ReqresService]
})
export class HomeComponent {
  listarUsuarios: Usuario[] = [];
  listarReqres: Reqres[] = [];
  
  constructor(private _reqresService: ReqresService, private toastr: ToastrService){
  }

  ngOnInit(): void {
    this.obtenerReqres();
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
