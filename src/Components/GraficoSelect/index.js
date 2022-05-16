import { Container, Paciente } from './style';
import React, { useEffect, useState } from 'react';
import { getIdPatient } from '../../Services/auth';
import http from '../../Services/httpRequest';
import { useHistory } from "react-router-dom";
import PCefalico from '../Graficos/pCefalico';
import PesoIdade from '../Graficos/pesoIdade';
import ComIdade from '../Graficos/comIdade';
import Imc from '../Graficos/imc';

const GraficoSelect = () => {

    const history = useHistory();

    
    const linkHome = () => {
        history.goBack();
    }

    // const [car, setCar] = useState("selectDreamCar");
    const [sexos, setEstado] = useState("");

    const [pesoIdade_ContentVisible, set_PesoIdadeContentVisible] = useState(true);
    const [comIdade_ContentVisible, set_ComIdadeContentVisible] = useState(false);
    const [imc_ContentVisible, set_ImcContentVisible] = useState(false);
    const [pCefalico_ContentVisible, set_pCefalicoContentVisible] = useState(false);

    
    useEffect(() => {
      sexos === ""
        ? set_PesoIdadeContentVisible(true)
        : set_PesoIdadeContentVisible(false);
      sexos === "1" ? set_ComIdadeContentVisible(true) : set_ComIdadeContentVisible(false);
      sexos === "2" ? set_ImcContentVisible(true) : set_ImcContentVisible(false);
      sexos === "3" ? set_pCefalicoContentVisible(true) : set_pCefalicoContentVisible(false);
    }, [sexos]);
    
    const [patient, setPatient] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await http.get(`/patient/${getIdPatient()}`);
            console.log(response.data);
            setPatient(response.data);
        })();
    }, []);
  


    return (
        <Container>
            <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop: '20px',
                    marginBottom: '20px'
                }}>
                    <Paciente>
                        <img />
                        <h1>
                            {patient.name}
                        </h1>
                    </Paciente>
                    </div>
            <select style={{ width: '26vw', backgroundColor: '#ECCFF9', borderRadius: '15px', height: '47px' }}
                name='sexos' value={sexos} onChange={texto => setEstado(texto.target.value)
                }>
                <option value="">Gráfico de Peso para Idade de 0 a 2 Anos</option>
                <option value="1">Gráfico de Comprimento para Idade de 0 a 2 Anos</option>
                <option value="2">Gráfico de IMC para Idade de 0 a 2 Anos</option>
                <option value="3">Gráfico de Perímetro Cefálico para Idade de 0 a 2 Anos</option>
            </select>
        {pesoIdade_ContentVisible && <PesoIdade />}
        {comIdade_ContentVisible && <ComIdade />}
        {imc_ContentVisible && <Imc />}
        {pCefalico_ContentVisible && <PCefalico />}
            <button onClick={linkHome}>
                Voltar para prontuario
            </button>
        </Container>
    );
}

export default GraficoSelect;