import React from "react";
import { Container } from "./style";

const Login  = () =>{
    return(
        <div class = "form-container">
            <form class = "register-form">
                <input 
                    id="cpf"
                    placeholder="Cpf do Paciente"
                />
                <input
                    id="senha"
                    placeholder="senha"                
                />
            </form>
        </div>
        
    )
}

export default Login;