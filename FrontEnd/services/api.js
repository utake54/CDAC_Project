import axios from "axios";
import { getToken } from "../auth";


import { privateAxios } from "../auth/PrivateAxios";


//const test ="http://localhost:8081";



const AWS_API ="http://afmsapiapp-env.eba-ssyuxjp8.ap-south-1.elasticbeanstalk.com/api/v1";
const LOCAL_API ="http://localhost:8081/api/v1";
export{AWS_API};
export{LOCAL_API};
//Api for victim registration
export const addVictimsApi = (victim) =>{

    try{
        return axios.post(`${LOCAL_API}/auth/register/victim`,victim).then((res)=>res.data);
    }catch(error){
        console.log("Error while calling addvictim api", error.messege);
    }
}   



//api for ogranization registration
export const addOrganizationNgoApi =  (org) =>{
    try{
        return axios.post(`${LOCAL_API}/auth/register/orgs`, org ).then((res)=>res.data);
    }catch(error){
        console.log("Error while calling addOrganization api" , error.messege );
    }
} 


//api for Voluneer registration
export const addVolunteerApi =  (volunteer) =>{
    try{
        return  axios.post(`${LOCAL_API}/auth/register/volunteer` , volunteer ).then((res)=>res.data);
    }catch(error){
        console.log("Error while calling addVolunteer api" , error.messege );
    }
} 

//api for get victim 
export const getVictimsApi = async (id) => {
    id= id  || "";
    try{
        return await axios.get(`${LOCAL_API}/victims/${id}`);
    }catch(error){
        console.log("Error while calling getVictims api ", error.messege);
    }
}

//api for get Organization 
export const getOrganizationApi = async () => {
    try{
        return await axios.get(`${LOCAL_API}/ngos`);
    }catch(error){
        console.log("Error while calling getOrganization api ", error.messege);
    }
}

//api for get volunteer
export const getVolunteerApi = async () => {
    try{
        return await axios.get(`${LOCAL_API}/volunteer`);
    }catch(error){
        console.log("Error while calling getVolunteer api ", error.messege);
    }
}



// { /*forlogincheck*/}
// export const getLoginApi = async (login)  =>{
//     try{
//         //localhost:9087/victims/
//         // return await axios.get(`${test}/victims/?vUserName=${e.loginUserName}&vPassword=${e.loginPassword}`);
//         return await axios.post(API2,login);
//     }catch(error){
//         console.log("Error while calling login api get",error.messege);
//     }
// }

//for login api
export const getLoginApi = (login) =>{
    return axios.post(`${LOCAL_API}/auth/login/victim`,login).then((res)=>res.data)
}



//for victim rescue request
export const addRescueRequest = (inputs) =>{
        
            return axios
            .post(
                `${LOCAL_API}/rescue/request`, inputs).then((res)=> res.data)
                
      
    }  ;

    //for vcim relief reqest
    export const addRelief = (inputs) =>{
        
        return axios
        .post(
            `${LOCAL_API}/foodmedical/request`, inputs).then((res)=> res.data)
            
  
}  ;

// export const addRescueRequest =  (inputs) =>{
//         try{
//             return privateAxios.axios.post(`http://localhost:8180/api/v1/rescue/request` , inputs );
//         }catch(error){
//             console.log("Error while calling rescue request  api" , error.messege );
//         }
//     }  


//api for donator 
export const Adddonator = async (data) => {
    try {
       return await axios.post(`${LOCAL_API}/donations`, data);
    }
    catch (error) {
       console.log("error with my side", error.message);
    }
 
 }