import React, { useEffect, useState } from 'react';
import { getIdPatient } from '../../Services/auth';
import http from '../../Services/httpRequest';
import { Container } from './style';

import useSWR from 'swr';

const useFetch = (url) => {
    const { data, error, mutate } = useSWR(url, async url => {
      const response = await http.get(url);
  
      return response.data;
    })
  
    return { data, error, mutate }
  
  }
  

const RestoConsultas = ({consulta}) => {
    

      const [patient, setPatient] = useState([]);

    useEffect(() => { 
        (async () => {
          const response = await http.get(`/patient/${getIdPatient()}`); 
          console.log(response.data);
          setPatient(response.data);
        })();
      }, []);

      console.log(consulta)
      

      const { data, mutate } = useFetch(`/consulta/findOne/${getIdPatient()}/${consulta}`);

      if (!data) return null;

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
            {data ?
             <div>
                <h1>
                Consulta de 1 mês - {data.date}
            </h1>
            <h1 style={{fontSize:'20px', marginBottom: '10px'}}>
                Medidas: 

                <p>
                    Perímetro Cefálico (cm): {data.perimetroCefalico} cm
                </p>
                <p>
                    Comprimento (cm): {data.comprimento} cm
                </p>
                <p>
                    Peso (KG): {data.peso} KG
                </p>
            </h1>
            <h1>
            Aleitamento/alimentação:
                <p>
                    Leite materno exclusivo (LME) : {data.leiteLME ? "Sim" : "Não"}
                </p>
                <p>
                Leite materno e leite artificial (LM+LA) : {data.leiteLMLA ? "Sim" : "Não"}
                </p>
                <p>
                Dificuldades para amamentar ? : {data.dificuldadeAmamentar ? "Sim" : "Não"}
                </p>
                <p>
                Parou de amamentar ? : {data.parouAmamentar ? "Sim" : "Não"}
                </p>
            </h1>
            <h1>
            Sinais de alerta:
                <p>
                    Coto umbilical infectado : {data.cotoUmbilical ? "Sim" : "Não"}
                </p>
                <p>
                    Icterícia : {data.inctericia ? "Sim" : "Não"}
                </p>
                <p>
                    Diarreia/Vômitos : {data.diarreiaVomito ? "Sim" : "Não"}
                </p>
                <p>
                    Dificuldades de respirar : {data.dificuldadeRespirar ? "Sim" : "Não"}
                </p>
                <p>
                    Febre (≥37,5°C) : {data.febre ? "Sim" : "Não"}
                </p>
                <p>
                    Hipotermia (+36,5°C) : {data.hipotermia ? "Sim" : "Não"}
                </p>
                <p>
                    Convulsões ou movimentos anormais : {data.convulsoesOuMovAnor ? "Sim" : "Não"}
                </p>
                <p>
                    Ausculta cardíaca alterada/Cianose : {data.auscultaCardiaca ? "Sim" : "Não"}
                </p>
            </h1>
            <h1>
                Exame Ocular:
                <p>
                    Abertura ocular normal : {data.aberturaOcular ? "Sim" : "Não"}
                </p>
                <p>
                    Pupilas normais : {data.pupilasNormais ? "Sim" : "Não"}
                </p>
                <p>
                    Estrabismo : {data.estrabismo ? "Sim" : "Não"}
                </p>
            </h1>
                 </div>: null}
            
        </Container>
    );
};

export default RestoConsultas;
