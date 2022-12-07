import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'
import { isLoggedIn } from '../../auth';

export default function PrivateRoute() {

    
    if(isLoggedIn()){
        return <Outlet/>
    }else{
        return <Navigate to={"/LogIn"}/>;
    }
 

}
