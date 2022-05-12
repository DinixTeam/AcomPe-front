// import React, { useState } from 'react';
import { useEffect, useState } from "react";

import { Container } from './style';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useHistory } from "react-router-dom";
import MenuItem from '@mui/material/MenuItem';
import Primeira from '../Consultas/primeiraSemana';
import PrimeiroMes from '../Consultas/primeiroMes';
import ConsultasRestantes from '../Consultas/3a18consultas';

const GraficoSelect = () => {

    const history = useHistory();


    const linkHome = () => {
        history.goBack();
    }

    const [valuee, setValuee] = useState("1");

    const handleChange = (event) => {
        setValuee(event.target.value);
    };




    return (
        <Container style={{background: '#7698db'}}>

            <div style={{ width: '80%', marginTop: '20px', marginLeft: '10%', marginBottom: '20px' }}>
                <FormControl fullWidth style={{ background: '#d69af0', borderRadius: '10px', }}>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={valuee}
                        onChange={handleChange}
                    >
                        <MenuItem value={"1"}>Consulta da 1ª Semana</MenuItem>
                        <MenuItem value={"2"}>Consulta do 1º Mês</MenuItem>
                        <MenuItem value={"3"}>Do 3º ao 18º Mês</MenuItem>
                    </Select>
                </FormControl>
            </div>
            {valuee === "1" ? <Primeira /> : null}
            {valuee === "2" ? <PrimeiroMes /> : null}
            {valuee === "3"? <ConsultasRestantes /> : null} 

        </Container>
    );
}

export default GraficoSelect;