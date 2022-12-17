import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { SignIn } from 'src/app/models/signin';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent {
  user = {};
  usuarioForm: FormGroup;
  nombrePerfil: string;

  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService, private _usuarioService: UsuarioService, private aRouter: ActivatedRoute) {
    this.usuarioForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  iniciarSesion() {
    console.log(this.user);
    //Obtiene correo y password ingresado para enviarlo al banckend y verificar los Tokens
    const signIn: SignIn = {
      email: this.usuarioForm.get('email')?.value,
      password: this.usuarioForm.get('password')?.value,
    }
    this._usuarioService.iniciarSesion(signIn).subscribe(data => {
      this.toastr.success('Inicio de sesion exitoso', 'Iniciaste sesion!');
      this.router.navigate(['/usuario']);
    }, error => {
      //Verifica si es la cuenta de Administrador del sitio
      if(signIn.email == "root@itmakers.com" && signIn.password == "itmakers123"){
        this.toastr.success('Inicio de sesion exitoso', 'Iniciaste sesion como Administrador!');
        this.router.navigate(['/admin']);
      }else{
        console.log(error, "Datos incorrectos");
        this.toastr.error('Intenta nuevamente', 'Datos incorrectos!');
        this.usuarioForm.reset();
      }
    })
  }
}
