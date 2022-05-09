import React, { useState } from 'react';
import { Form, Image, Button, Input } from './style';
import logo from '../../Assets/logo.png'
import http from '../../Services/httpRquest'

import { useHistory } from "react-router-dom";

const FormLogin = () => {

    const [email, setEmail] = useState();
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();


    const history = useHistory();

    
    const linkHome = () => {
        history.push('/');
    }

    const register = () => {
        const body = {
            email: email,
            username: userName,
            password: password
        }
        console.log(body)
        if(body.email !== '' && body.username !== "" && body.password !== ''){
            http
            .post('/pediatra', body)
            .then((res) => {
                console.log(res)
                console.log('go')
                history.push('/cadastro');
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
                <h1 style={{marginBottom: '10px'}}>Cadastro</h1>
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
                        <h2>Nome de Usuário</h2>
                        <input 
                        onChange={e => setUserName(e.target.value)}
                        placeholder="Nome de Usuário"
                        maxLength="20"
                        type="text"
                        required
                        value={userName}
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
                    onClick={linkHome}>
                        Tenho Cadastro
                    </div>
                    <Button onClick={register}>Criar</Button>
            </Form>
        </div>
    );
}

export default FormLogin;