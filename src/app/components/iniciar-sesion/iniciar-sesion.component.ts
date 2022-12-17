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
  // id: string | null;

  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService, private _usuarioService: UsuarioService, private aRouter: ActivatedRoute) {
    this.usuarioForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
    // this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
  }

  nombreUsuario(nombre: string){
    this.nombrePerfil = nombre;
    console.log("Esta es la variable nombre", nombre);
  }
  iniciarSesion() {
    console.log(this.user);
    const signIn: SignIn = {
      email: this.usuarioForm.get('email')?.value,
      password: this.usuarioForm.get('password')?.value,
    }
    
    this._usuarioService.iniciarSesion(signIn).subscribe(data => {
      this.toastr.success('Inicio de sesion exitoso', 'Iniciaste sesion!');
      this.nombreUsuario(this.usuarioForm.get('email')?.value)
      this.router.navigate(['/usuario']);
    }, error => {
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
