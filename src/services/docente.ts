import axios from "axios";

const query: string = "http://localhost:3001"


export function getOneDocente(id:string): Promise<any>{
    return new Promise<any>(resolve=>{   
        axios.get(`${query}/docente/${id}`)
        .then(result=>{        
            resolve(result.data);
            
        })
        .catch(error => resolve([]));
    });
}






