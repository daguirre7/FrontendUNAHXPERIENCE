import {IRate} from "./rate"
import {ICurso} from "./curso"

export interface IDocente {
    _id:string
    NombreDocente: string;
    Aprobado: boolean;
    RateStart: IRate[];
    CursoID: ICurso[];
}