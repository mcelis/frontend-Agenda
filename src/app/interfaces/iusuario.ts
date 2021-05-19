export interface IUsuario{
    id: number;
    nombre: string;
    apellidos: string;
    direccion: string;
    correo: string;
    telefono: number;
    password: string;
    usuario: string; 
    token?:string;  
}

export interface ApiUsuarios {
    success : boolean,
    message : string,
    data? : IUsuario[]
}