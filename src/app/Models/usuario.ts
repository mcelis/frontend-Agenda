import {IUsuario} from './../interfaces/iusuario'

export class Contacto implements IUsuario {
    id: number;
    nombre: string;
    apellidos: string;
    direccion: string;
    correo: string;
    telefono: number;
    password: string;
    usuario: string;

    
    constructor(nombre:string , apellidos:string, direccion:string, correo:string, telefono:number, password: string,
        usuario: string){
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.direccion = direccion;
    this.correo = correo;
    this.telefono = telefono;
    this.password = password;
    this.usuario = usuario;
    }
    
    
    
    }