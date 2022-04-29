import styled from "styled-components";

const Cadastro  = () =>{
    return(
        <div class = "form-container">
            <form class = "register-form">
                <input 
                    id="Email"
                    placeholder="Email"
                />
                <input
                    id="usermane"
                    placeholder="Nome de Usuário"                
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