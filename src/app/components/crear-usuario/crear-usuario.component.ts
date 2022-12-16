import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent {

  usuarioForm: FormGroup;
  titulo = 'Registro';
  id: string | null;

  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService, private _usuarioService: UsuarioService, private aRouter: ActivatedRoute) {
    this.usuarioForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', Validators.required],
      rol: ['', Validators.required],
      imagen: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngonInit(): void {
    this.editar();
  }

  agregarUsuario() {
    console.log(this.usuarioForm);
    console.log(this.usuarioForm.get('nombre')?.value);
    const usuario: Usuario = {
      nombre: this.usuarioForm.get('nombre')?.value,
      email: this.usuarioForm.get('email')?.value,
      telefono: this.usuarioForm.get('telefono')?.value,
      rol: this.usuarioForm.get('rol')?.value,
      imagen: this.usuarioForm.get('imagen')?.value,

    }
    console.log(usuario);
    this._usuarioService.nuevoUsuario(usuario).subscribe(data => {

      this.toastr.success('El usuario fue registrado con exito!', 'Usuario Registrado!');
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
      this.usuarioForm.reset();
    })
  }
  editar() {
    if (this.id !== null) {
      this.titulo = 'Editar producto';
      this._usuarioService.obtenerUsuario(this.id).subscribe(data => {
        this.usuarioForm.setValue({
          nombre: data.nombre,
          email: data.email,
          telefono: data.telefono,
          rol: data.rol,
          imagen: data.imagen
        })
      })
    }
  }
}

