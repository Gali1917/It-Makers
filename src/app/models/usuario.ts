export class Usuario{
    _id?: number;
    nombre: string;
    email: string;
    telefono: number;
    rol: string;
    constructor(nombre: string, email: string, telefono: number, rol: string){
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
        this.rol = rol;
    }
}