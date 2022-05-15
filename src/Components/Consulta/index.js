import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Container } from './style';
import Prontuario from '../Prontuario';
import Atendimento from '../Atendimento'
import http from '../../Services/httpRequest';
import { getIdPatient } from '../../Services/auth';

const Consulta = () => {
    const [valuee, setValuee] = useState(10);
    const [consultas, setConsultas] = useState([])
    const history = useHistory();

    useEffect(() => {
        (async () => {
            const response = await http.get(`/consulta/frompatient/${getIdPatient()}`);
            console.log(response.data.consults);
            setConsultas(response.data.consults);
        })();
    }, []);


    const handleChange = (event) => {
        setValuee(event.target.value);
    };

    const linkGraficos = () => {
        history.push('/graficos');
    }

    const linkConsulta = () => {
        history.push('/addConsulta');
    }

    return (
        <Container>
            <div style={{ width: '80%', marginTop: '20px', marginLeft: '10%', marginBottom: '20px' }}>
                <FormControl fullWidth style={{ background: '#d69af0', borderRadius: '10px', }}>
                    <InputLabel id="demo-simple-select-label">Consulta</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={valuee}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>1º Consulta</MenuItem>
                        <MenuItem value={20}>Consulta do 1º mês</MenuItem>
                        {consultas.map((item, index) => {
                            return (
                                <MenuItem value={index}>{index + 3}º Consulta</MenuItem>
                            )
                        })}


                    </Select>
                </FormControl>
            </div>
<<<<<<< HEAD
            {/* {valuee === 10 ? <Prontuario /> : null} */}
            {valuee === 20 ? <Atendimento /> : null}
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: '100px',
                marginLeft: '10%',
                marginRight: '10%'
            }}>
                {/* {valuee === 10 ? <Prontuario /> : null} */}
=======
            {valuee === 10 ? <Prontuario /> : null}
>>>>>>> bb857615176be17e49d0969342de5fa2321329bc
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: '100px',
                    marginLeft: '10%',
                    marginRight: '10%'
                }}>
                    <button onClick={linkConsulta}>
                        Adicionar Consulta
                    </button>
                    <button onClick={linkGraficos}>
                        Ver Graficos
                    </button>
                </div>
            </div>
        </Container>
    )
}

export default Consulta;