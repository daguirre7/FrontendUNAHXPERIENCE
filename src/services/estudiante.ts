import axios from "axios";

const query: string = "http://localhost:3001"


export function postEstudiante(data:any): Promise<any>{
    return new Promise<any>( resolve => {
        axios.post(`${query}/estudiante/registro`,data)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
}