import React from 'react';
import { Form, Image, Button, Input } from './style';
import logo from '../../Assets/logo.png'

import { useHistory } from "react-router-dom";

const FormLogin = () => {

    const history = useHistory();

    const linkCadastro = () => {
        history.push('/cadastro');
    }
    const linkHome = () => {
        history.push('/home');
    }
    
    return(
        <div>
            <Image src={logo}/>
            <Form>
                <h1 style={{marginBottom: '10px'}}>Login</h1>
                    <Input>
                        <h2>Nome de usuario </h2>
                        <input 
                        />
                    </Input>
                    <Input>
                        <h2>Senha</h2>
                        <input 
                        />
                    </Input>
                    <div 
                    style={{fontSize: '15px', marginBottom: '10px', cursor: 'pointer', fontWeight: 'bold'}} 
                    onClick={linkCadastro}>
                        Não tenho Cadastro
                    </div>
                    <Button onClick={linkHome}>Entrar</Button>
            </Form>
        </div>
    );
}

export default FormLogin;