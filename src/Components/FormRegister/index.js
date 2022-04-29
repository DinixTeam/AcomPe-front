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
        history.push('/');
    }
    
    return(
        <div>
            <Image src={logo}/>
            <Form>
                <h1 style={{marginBottom: '10px'}}>Cadastro</h1>
                    <Input>
                        <h2>Email </h2>
                        <input 
                        />
                    </Input>
                    <Input>
                        <h2>Nome de Usuário</h2>
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
                    onClick={linkHome}>
                        Tenho Cadastro
                    </div>
                    <Button onClick={linkHome}>Criar</Button>
            </Form>
        </div>
    );
}

export default FormLogin;