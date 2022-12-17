import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  usuarioForm: FormGroup;
  titulo = 'Registrar';
  id: string | null;

  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService, private _usuarioService: UsuarioService, private aRouter: ActivatedRoute, private _location: Location) {
    this.usuarioForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', Validators.required],
      imagen: ['', Validators.required],
      password: ['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.editar();
  }

  //Agregar nuevo usuario
  agregarUsuario() {
    const usuario: Usuario = {
      nombre: this.usuarioForm.get('nombre')?.value,
      email: this.usuarioForm.get('email')?.value,
      telefono: this.usuarioForm.get('telefono')?.value,
      imagen: this.usuarioForm.get('imagen')?.value,
      password: this.usuarioForm.get('password')?.value,

    }
    if (this.id !== null) {
      //Editar Usuario
      this._usuarioService.editarUsuario(this.id, usuario).subscribe(data => {
        this.toastr.info('El usuario fue actualizado con exito!', 'Usuario Actualizado!');
        this.router.navigate(['/admin']);
      }, error => {
        console.log(error);
        this.usuarioForm.reset();
      })
    } else {
      //Agregar usuario
      console.log(usuario);
      this._usuarioService.nuevoUsuario(usuario).subscribe(data => {
        this.toastr.success('El usuario fue registrado con exito!', 'Usuario Registrado!');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.usuarioForm.reset();
      })
    }
  }
  editar() {
    if (this.id !== null) {
      this.titulo = 'Editar Usuario';
      this._usuarioService.obtenerUsuario(this.id).subscribe(data => {
        this.usuarioForm.setValue({
          nombre: data.nombre,
          email: data.email,
          telefono: data.telefono,
          imagen: data.imagen,
          password: data.password,
        })
      })
    }
  }
  back(){
    this._location.back();
  }
}

