import React, { useState } from 'react';
import { Form, Image, Button, Input, Container } from './style';
import logo from '../../Assets/logo.png'
import moment from 'moment';

import { useHistory } from "react-router-dom";
import { style } from '@mui/system';

const AddPacient = () => {

    const history = useHistory();

    const linkAddPaciente = () => {
        history.push('/addPaciente');
    }
    const linkHome = () => {
        history.push('/');
    }
    // const sexos = [
    //     { label: 'machu', value: 'Machu' },
    //     { label: 'Fêma', value: 'Fêma' },
    //     { label: 'Tony', value: 'Tony' },
    // ];

    const [sexos, setEstado] = useState(0);

    return (
        <Container>
            <Form>
                <h1 style={{ marginBottom: '10px', color: 'white' }}>Adicionar paciente</h1>
                <Input>
                    <h2>Nome </h2>
                    <input
                        style={{ widht: '100%' }}
                    />
                </Input>
                <Input>
                    <h2>Nome do responsável</h2>
                    <input
                    />
                </Input>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Input>
                        <h2>Sexo</h2>
                        <select style={{ width: '20vw', backgroundColor: '#ECCFF9', borderRadius: '15px', height: '47px' }}
                             name='sexos' value={sexos} onChange={texto => setEstado(texto.target.value)
                        }>
                            <option value="">Selecione</option>
                            <option value="1">Masculino</option>
                            <option value="2">Feminino</option>
                            <option value="3">Tony</option>
                        </select>
                    </Input>
                    <Input>
                        <h2> Data de nascimento</h2>
                        <input
                            type='date'
                            max={moment().format("YYYY-MM-DD")}
                            style={{ marginLeft: '10px', width: '19.5vw' }}
                        />
                    </Input>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Input>
                        <h2>RG</h2>
                        <input
                            style={{ width: '19.5vw' }}
                        />
                    </Input>
                    <Input>
                        <h2>CPF</h2>
                        <input
                            style={{ marginLeft: '10px', width: '20vw' }}
                        />
                    </Input>
                </div>

                <Input>
                    <h2>Número de telefone</h2>
                    <input
                    />
                </Input>
                <Button
                    onClick={linkHome}>+
                </Button>
            </Form>
        </Container>
    );
}

export default AddPacient;