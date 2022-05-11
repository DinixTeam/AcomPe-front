// import React, { useState } from 'react';
import { useEffect, useState } from "react";

import { Container } from './style';

import { useHistory } from "react-router-dom";
import Primeira from '../Consultas/primeiraSemana';
import PrimeiroMes from '../Consultas/primeiroMes';


const GraficoSelect = () => {

    const history = useHistory();


    const linkHome = () => {
        history.goBack();
    }

    // const [car, setCar] = useState("selectDreamCar");
    const [consultas, setEstado] = useState("");

    const [primeira_ContentVisible, set_PrimeiraContentVisible] = useState(true);
    const [primeiroMes_ContentVisible, set_PrimeiroMesContentVisible] = useState(false);


    useEffect(() => {
        consultas === "1" ? set_PrimeiraContentVisible(true) : set_PrimeiraContentVisible(false);
        consultas === "2" ? set_PrimeiroMesContentVisible(true) : set_PrimeiroMesContentVisible(false);
    }, [consultas]);




    return (
        <Container>
            <select style={{ width: '26vw', backgroundColor: '#ECCFF9', borderRadius: '15px', height: '47px' }}
                name='consultas' value={consultas} onChange={texto => setEstado(texto.target.value)
                }>
                <option value="1">Consulta da 1ª Semana</option>
                <option value="2">Consulta do 1º Mês</option>
                <option value="3">Consulta do 2º Mês</option>
            </select>
            {primeira_ContentVisible && <Primeira />}
            {primeiroMes_ContentVisible && <PrimeiroMes />}
        </Container>
    );
}

export default GraficoSelect;