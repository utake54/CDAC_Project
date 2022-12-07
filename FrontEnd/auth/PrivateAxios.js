
import axios from "axios"
import { getToken } from "."



export const privateAxios = axios.create({

    baseURL : "http://localhost:8180/api/v1/"
})

privateAxios.interceptors.request.use(
    (config) => {
    const token = getToken();

   
    
    if(token){
        config.headers.common.Authorization=`Bearer ${token}`;
        console.log(token);
    }

    return config;
},
 (error) =>Promise.reject(error)
 );  