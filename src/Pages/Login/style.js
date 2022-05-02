import styled from "styled-components";

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

export const Container = styled.div`
    background: #7897da;
    display: flex;
    align-items: center;
    min-height: 100vh;
    justify-content: center;
`;