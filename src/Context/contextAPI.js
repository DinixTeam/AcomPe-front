import React, { createContext } from "react";
import useAuth from "./useAuth";




const Context = createContext();


function AuthPorvider({children}){
    const {desloga, loading, auth, loga} = useAuth();
    
    return(
        <Context.Provider
        value={{
            auth,
            loading,
            desloga,
            loga,
          }}
        >
            {children}
        </Context.Provider>
    );
}

export { Context, AuthPorvider};