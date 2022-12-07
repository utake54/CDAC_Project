//auhenicate checking is logged in? if local storage has a token?
export const isLoggedIn = () =>{
    let data=localStorage.getItem("data")
    if(data!=null){
        return true;
    }else{
         return false;
    }
};

//do login
export const doLogin = (data,next) =>{
    //data is the key token
    localStorage.setItem("data",JSON.stringify(data));
    next()
};

//do logout remove the token
export const doLogOut = (next) =>{
    localStorage.removeItem("data");
    next()
};




//get current users
export const getCurrentUserDetail = () =>{
    if(isLoggedIn()){
        return JSON.parse(localStorage.getItem("data"));  //.user
    }else{
        return undefined;
    }
};

export const getToken =() => {
    if(isLoggedIn()){
        return JSON.parse(localStorage.getItem("data")).token 
    }else{
        return null;
    }
};