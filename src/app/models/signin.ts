//Esquema de inicio de sesion

export class SignIn{
    _id?: number;
    email: string;
    password: string;
    constructor(email: string, password: string){
        this.email = email;
        this.password = password;
    }
}