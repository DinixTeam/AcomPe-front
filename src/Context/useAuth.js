
  
import { useState, useEffect } from 'react';
import { getToken, isAuthenticated, logout } from "../Services/auth";
import http from '../Services/httpRequest';
export default function useAuth() {
    let [auth, setAuth] = useState(false);
    let [loading, setLoading] = useState(true);
    
    useEffect(()=> {
       console.log(isAuthenticated())
        if(isAuthenticated()){
            setAuth(true);
        }
        setLoading(false); 
     }, []);

      function loga(){
        setAuth(true);
     }
    
     function desloga() {
        setAuth(false);
        logout();
        http.defaults.headers.Authorization = undefined;
     }

     

    return {desloga, loading, auth, loga};
}