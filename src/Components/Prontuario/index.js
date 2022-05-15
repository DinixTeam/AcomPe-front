import React, { useEffect, useState } from 'react';
import { getIdPatient } from '../../Services/auth';
import http from '../../Services/httpRequest';
import { Container } from './style';

const Prontuario = () => {
    const [caderneta, setCaderneta] = useState([]);

    useEffect(() => { 
        (async () => {
          const response = await http.get(`/caderneta/frompatient/${getIdPatient()}`); 
          console.log(response.data.caderneta);
          setCaderneta(response.data.caderneta);
        })();
      }, []);

      const [patient, setPatient] = useState([]);

    useEffect(() => { 
        (async () => {
          const response = await http.get(`/patient/${getIdPatient()}`); 
          console.log(response.data);
          setPatient(response.data);
        })();
      }, []);

    return(

        <Container>
            <h1>
                Nome Completo: {patient.name}
            </h1>
            <h1>
                CPF do Responsavel: {patient.cpf}
            </h1>
            <h1>
                Data de Nascimento: {patient.bornDate}
            </h1>
            <h1>
                Sexo: {patient.sex}
            </h1>
            {caderneta ? <div>
                {/* <h1>
                Primeira consulta - {caderneta.date}
            </h1>
            <h1 style={{fontSize:'20px', marginBottom: '10px'}}>
                Medidas: 

                <p>
                    Perímetro Cefálico (cm): {caderneta.perimetroCefalico} cm
                </p>
                <p>
                    Comprimento (cm): {caderneta.comprimento} cm
                </p>
                <p>
                    Peso (KG): {caderneta.peso} KG
                </p>
            </h1>
            <h1>
            Aleitamento/alimentação:
                <p>
                    Leite materno exclusivo (LME) : {caderneta.leiteLME ? "Sim" : "Não"}
                </p>
                <p>
                Leite materno e leite artificial (LM+LA) : {caderneta.leiteLMLA ? "Sim" : "Não"}
                </p>
                <p>
                Dificuldades para amamentar ? : {caderneta.dificuldadeAmamentar ? "Sim" : "Não"}
                </p>
                <p>
                Parou de amamentar ? : {caderneta.parouAmamentar ? "Sim" : "Não"}
                </p>
            </h1>
            <h1>
            Sinais de alerta:
                <p>
                    Coto umbilical infectado : {caderneta.cotoUmbilical ? "Sim" : "Não"}
                </p>
                <p>
                    Icterícia : {caderneta.inctericia ? "Sim" : "Não"}
                </p>
                <p>
                    Diarreia/Vômitos : {caderneta.diarreiaVomito ? "Sim" : "Não"}
                </p>
                <p>
                    Dificuldades de respirar : {caderneta.dificuldadeRespirar ? "Sim" : "Não"}
                </p>
                <p>
                    Febre (≥37,5°C) : {caderneta.febre ? "Sim" : "Não"}
                </p>
                <p>
                    Hipotermia (+36,5°C) : {caderneta.hipotermia ? "Sim" : "Não"}
                </p>
                <p>
                    Convulsões ou movimentos anormais : {caderneta.convulsoesOuMovAnor ? "Sim" : "Não"}
                </p>
                <p>
                    Ausculta cardíaca alterada/Cianose : {caderneta.auscultaCardiaca ? "Sim" : "Não"}
                </p>
            </h1>
            <h1>
                Vacinas:
                <p>
                    Hepatite B : {caderneta.hepatiteB ? "Sim" : "Não"}
                </p>
                <p>
                    BCG : {caderneta.bcg ? "Sim" : "Não"}
                </p>
            </h1> */}
            </div> : <div>
                    Sem Primeira Consulta
                </div>}
           
        </Container>
    );
};

export default Prontuario;
