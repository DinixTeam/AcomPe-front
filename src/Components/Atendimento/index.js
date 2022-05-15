import React, { useEffect, useState } from 'react';
import { getIdPatient } from '../../Services/auth';
import http from '../../Services/httpRequest';
import { Container } from './style';


const Atendimento = () => {
    const [atendimento, setatendimento] = useState([]);

    useEffect(() => { 
        (async () => {
          const response = await http.get(`/atendimento/frompatient/${getIdPatient()}`); 
          console.log(response.data.atendimento);
          setatendimento(response.data.atendimento);
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
            <h1>
                Consulta de 1 mês - {atendimento.date}
            </h1>
            <h1 style={{fontSize:'20px', marginBottom: '10px'}}>
                Medidas: 

                <p>
                    Perímetro Cefálico (cm): {atendimento.perimetroCefalico} cm
                </p>
                <p>
                    Comprimento (cm): {atendimento.comprimento} cm
                </p>
                <p>
                    Peso (KG): {atendimento.peso} KG
                </p>
            </h1>
            <h1>
            Aleitamento/alimentação:
                <p>
                    Leite materno exclusivo (LME) : {atendimento.leiteLME ? "Sim" : "Não"}
                </p>
                <p>
                Leite materno e leite artificial (LM+LA) : {atendimento.leiteLMLA ? "Sim" : "Não"}
                </p>
                <p>
                Dificuldades para amamentar ? : {atendimento.dificuldadeAmamentar ? "Sim" : "Não"}
                </p>
                <p>
                Parou de amamentar ? : {atendimento.parouAmamentar ? "Sim" : "Não"}
                </p>
            </h1>
            <h1>
            Sinais de alerta:
                <p>
                    Coto umbilical infectado : {atendimento.cotoUmbilical ? "Sim" : "Não"}
                </p>
                <p>
                    Icterícia : {atendimento.inctericia ? "Sim" : "Não"}
                </p>
                <p>
                    Diarreia/Vômitos : {atendimento.diarreiaVomito ? "Sim" : "Não"}
                </p>
                <p>
                    Dificuldades de respirar : {atendimento.dificuldadeRespirar ? "Sim" : "Não"}
                </p>
                <p>
                    Febre (≥37,5°C) : {atendimento.febre ? "Sim" : "Não"}
                </p>
                <p>
                    Hipotermia (+36,5°C) : {atendimento.hipotermia ? "Sim" : "Não"}
                </p>
                <p>
                    Convulsões ou movimentos anormais : {atendimento.convulsoesOuMovAnor ? "Sim" : "Não"}
                </p>
                <p>
                    Ausculta cardíaca alterada/Cianose : {atendimento.auscultaCardiaca ? "Sim" : "Não"}
                </p>
            </h1>
            <h1>
                Exame Ocular:
                <p>
                    Abertura ocular normal : {atendimento.aberturaOcular ? "Sim" : "Não"}
                </p>
                <p>
                    Pupilas normais : {atendimento.pupilasNormais ? "Sim" : "Não"}
                </p>
                <p>
                    Estrabismo : {atendimento.estrabismo ? "Sim" : "Não"}
                </p>
            </h1>
        </Container>
    );
};

export default Atendimento;
