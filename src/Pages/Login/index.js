import React from "react";
import { Container } from "./style";
import "./index.css";

const Login  = () =>{
    return(
        <div class = "form-container">
            <form class = "register-form" id="formulario">
                <input class = "campo-cpf"
                    id="cpf"
                    // placeholder="Cpf do Paciente"
                />
                <input class = "campo-senha"
                    id="senha"
                    // placeholder="senha"                
                />
                {/* <buttom><span class="bottom-entrar"></span>Entrar</buttom> */}
                <input class="buttom-entrar" type="submit" value= "ENTRAR"/>
            </form>
        </div>
    )
}

export default Login;