import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent {

  usuarioForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService){
    this.usuarioForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', Validators.required],
      rol: ['', Validators.required],
    })
  }

  agregarUsuario(){
    console.log(this.usuarioForm);
    console.log(this.usuarioForm.get('nombre')?.value);
    const Usuario: Usuario = {
      nombre: this.usuarioForm.get('nombre')?.value,
      email: this.usuarioForm.get('email')?.value,
      telefono: this.usuarioForm.get('telefono')?.value,
      rol: this.usuarioForm.get('rol')?.value,

    }
    console.log(Usuario);
    this.toastr.success('El usuario fue registrado con exito!', 'Usuario Registrado!');
    this.router.navigate(['/']);
  }
}

