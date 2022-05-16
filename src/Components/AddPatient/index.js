import React, { useState } from 'react';
import { Form, Image, Button, Input, Container } from './style';
import logo from '../../Assets/logo.png'
import moment from 'moment';

import { useHistory } from "react-router-dom";
import { style } from '@mui/system';
import http from '../../Services/httpRequest';
import { getId } from '../../Services/auth';
import swal from 'sweetalert';

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

    const [sexos, setEstado] = useState('');
    const [nome, setNome] = useState('');
    const [nomeResponsavel, setNomeResponsavel] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [RG, setRG] = useState('');
    const [CPF, setCPF] = useState('');
    const [telefone, setTelefone] = useState('');

    const register = () => {
        const body = {
            name: nome,
            parentName: nomeResponsavel,
            phone: telefone,
            cpf: CPF,
            rg: RG,
            sex: sexos,
            bornDate: nascimento,
            pediatraID: getId()
        }
        console.log(body)
        if (body.name !== ''
            && body.parentName !== ""
            && body.phone !== ''
            && body.cpf !== ''
            && body.rg !== ''
            && body.bornDate !== ''
            && body.sex !== '') {
            http
                .post('/patient', body)
                .then((res) => {
                    console.log(res)
                    console.log('go')
                    history.push('/home');
                })
                .catch((err) => {
                    console.log(err.response)
                     swal(err.response.data.message);
                })
        } else {
            console.log('erro')
             swal('Preencha todos os dados!');
        }

    }


    return (
        <Container>
            <Form>
                <h1 style={{ marginBottom: '10px', color: 'white' }}>Adicionar paciente</h1>
                <Input>
                    <h2>Nome </h2>
                    <input
                        style={{ widht: '100%' }}
                        onChange={e => setNome(e.target.value)}
                        placeholder="Nome"
                        type="text"
                        value={nome}
                    />
                </Input>
                <Input>
                    <h2>Nome do responsável</h2>
                    <input
                        onChange={e => setNomeResponsavel(e.target.value)}
                        placeholder="Nome do Responsável"
                        type="text"
                        value={nomeResponsavel}
                    />
                </Input>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Input>
                        <h2>Sexo</h2>
                        <select style={{ width: '20vw', backgroundColor: '#ECCFF9', borderRadius: '15px', height: '47px', padding: '10px', border: 'none' }}
                            name='sexos' value={sexos} onChange={texto => setEstado(texto.target.value)
                            }>
                            <option value="">Selecione</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Feminio">Feminino</option>
                        </select>
                    </Input>
                    <Input>
                        <h2> Data de nascimento</h2>
                        <input
                            type='date'
                            value={nascimento}
                            max={moment().format("YYYY-MM-DD")}
                            style={{ marginLeft: '10px', width: '19.5vw' }}
                            onChange={e => setNascimento(e.target.value)}
                        />
                    </Input>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Input>
                        <h2>RG</h2>
                        <input
                            style={{ width: '19.5vw' }}
                            onChange={e => setRG(e.target.value)}
                            placeholder="RG"
                            type="text"
                            value={RG}
                        />
                    </Input>
                    <Input>
                        <h2>CPF</h2>
                        <input
                            style={{ marginLeft: '10px', width: '20vw' }}
                            onChange={e => setCPF(e.target.value)}
                            placeholder="CPF"
                            type="text"
                            value={CPF}
                        />
                    </Input>
                </div>

                <Input>
                    <h2>Número de telefone</h2>
                    <input
                        onChange={e => setTelefone(e.target.value)}
                        placeholder="Telefone"
                        type="text"
                        value={telefone}
                    />
                </Input>
                <Button
                    onClick={register} style={{ color: 'white', fontSize: '2.5vw' }}>+
                </Button>
            </Form>
        </Container>
    );
}

export default AddPacient;