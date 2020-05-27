import axios from "axios";

const query: string = "http://localhost:3001"


export function getCarreras(): Promise<any>{
    return new Promise<any>(resolve=>{   
        axios.get(`${query}/carreras`)
        .then(result=>{        
            resolve(result.data);
        })
        .catch(error => resolve([]));
    });
}

