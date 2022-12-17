//Esquema de Usuario
export class Usuario{
    _id?: number;
    nombre: string;
    email: string;
    telefono: number;
    imagen: string;
    password: string;
    constructor(nombre: string, email: string, telefono: number, imagen: string, password: string){
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
        this.imagen = imagen;
        this.password = password;
    }
}