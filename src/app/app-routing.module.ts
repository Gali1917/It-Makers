import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { HomeComponent } from './components/home/home.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { ListarUsuariosComponent } from './components/listar-usuarios/listar-usuarios.component';

//Rutas de navegacion 
const routes: Routes = [
    {path: 'usuario', component: ListarUsuariosComponent},
    {path: 'crear-usuario', component: CrearUsuarioComponent},
    {path: 'editar-usuario/:id', component: CrearUsuarioComponent},
    {path: 'iniciar-sesion', component: IniciarSesionComponent},
    {path: '', component: HomeComponent},
    {path: 'admin', component: AdminComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{};