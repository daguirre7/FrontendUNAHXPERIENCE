import {ICarrera} from "./carrera"

export interface IEstudiante {
    NickName: String;
    Name: String;
    LastName: string;
    Email: string;
    Password: string;
    AccountNumber: number;  
    Rol: string;
    CarreraID: ICarrera[];
}