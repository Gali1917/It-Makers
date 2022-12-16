export class Usuario{
    _id?: number;
    nombre: string;
    email: string;
    telefono: number;
    rol: string;
    imagen: string;
    constructor(nombre: string, email: string, telefono: number, rol: string, imagen: string){
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
        this.rol = rol;
        this.imagen = imagen;
    }
}