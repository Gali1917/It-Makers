import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent {

  usuarioForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.usuarioForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', Validators.required],
      rol: ['', Validators.required],
    })
  }

  agregarUsuario(){
    console.log(this.usuarioForm);
  }
}

