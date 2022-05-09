import React, { useState } from 'react';
import { Form, Image, Button, Input } from './style';
import logo from '../../Assets/logo.png'

import { useHistory } from "react-router-dom";
import http from '../../Services/httpRquest';

const FormLogin = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const history = useHistory();

    const linkCadastro = () => {
        history.push('/cadastro');
    }
    
    
    const login = () => {
        const body = {
            emailOrCPF: email,
            password: password
        }
        console.log(body)
        if( body.email !== "" && body.password !== ''){
            http
            .post('/login', body)
            .then((res) => {
                console.log(res)
                console.log('go')
                history.push('/home');
            })
            .catch((err) => {
                console.log(err.response)
            })
        } else {
            console.log('erro')
        }
    }
    return(
        <div>
            <Image src={logo}/>
            <Form>
                <h1 style={{marginBottom: '10px'}}>Login</h1>
                    <Input>
                        <h2>Email </h2>
                        <input 
                           onChange={e => setEmail(e.target.value)}
                           placeholder="Email"
                           type="email"
                           required
                           value={email}
                        />
                    </Input>
                    <Input>
                        <h2>Senha</h2>
                        <input 
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Senha"
                        type="password"
                        required
                        value={password}
                        />
                    </Input>
                    <div 
                    style={{fontSize: '15px', marginBottom: '10px', cursor: 'pointer', fontWeight: 'bold'}} 
                    onClick={linkCadastro}>
                        Não tenho Cadastro
                    </div>
                    <Button onClick={login}>Entrar</Button>
            </Form>
        </div>
    );
}

export default FormLogin;