import React from 'react';
import { Form, Image, Button, Input, Container } from './style';
import logo from '../../Assets/logo.png'

import { useHistory } from "react-router-dom";

const AddPacient = () => {

    const history = useHistory();

    const linkAddPaciente = () => {
        history.push('/addPaciente');
    }
    const linkHome = () => {
        history.push('/');
    }
    
    return(
        <Container>
            <Form>
                <h1 style={{marginBottom: '10px', color: 'white'} }>Adicionar paciente</h1>
                    <Input>
                        <h2>Nome </h2>
                        <input 
                        />
                    </Input>
                    <Input>
                        <h2>Nome do responsável</h2>
                        <input 
                        />
                    </Input>
                    <Input>
                        <h2>Sexo</h2>
                        <input
                        />
                    </Input>
                    <Input>
                        <h2>RG</h2>
                        <input
                        />
                    </Input>
                    <Input>
                        <h2>CPF</h2>
                        <input
                        />
                    </Input>
                    <Input>
                        <h2>Número de telefone</h2>
                        <input
                        />
                    </Input>
                    <Button onClick={linkHome}>Botão +</Button>
            </Form>
        </Container>
    );
}

export default AddPacient;