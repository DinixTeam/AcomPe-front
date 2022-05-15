import React, { useState } from 'react';
import { Form, Container, Input } from './style';
import moment from 'moment';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { useHistory } from "react-router-dom";
import { getId, getIdPatient } from '../../../Services/auth';
import http from '../../../Services/httpRequest';



const ConsultasRestantes = () => {

    const history = useHistory();

    const [pCefalico, setPCefalico] = useState('');
    const [peso, setPeso] = useState('');
    const [comp, setComp] =useState('');
    const [amamentar, setAmamentar] = useState(false);
    const [stopAmamentar, setStopAmamentar] = useState(false);
    const [umbilical, setUmbical] = useState(false);
    const [ictericia, setIctericia] = useState(false);
    const [diarreVomit, setDiarreVomit] = useState(false);
    const [dificulResp, setDificulResp] = useState(false);
    const [febre, setFebre] = useState(false);
    const [hipotermia, setHipotermia] = useState(false);
    const [convul, setConvul] = useState(false);
    const [ausculta, setAusculta] = useState(false);
    const [aberOcu, setAbertOcu] = useState(false);
    const [pupilas, setPupilas] = useState(false);
    const [estrabismo, setEstrabismo] = useState(false)
    const [leiteLME, setLeiteLME] = useState(false);
    const [leiteLMLA, setLeiteLMLA] = useState(false);

    const linkHome = () => {
        history.goBack();
    }

    const addConsulta = () => {
        const body = {
            perimetroCefalico: pCefalico,
            peso: peso,
            comprimento: comp,
            leiteLME: leiteLME,
            leiteLMLA: leiteLMLA,
            dificuldadeAmamentar: amamentar,
            parouAmamentar: stopAmamentar,
            cotoUmbilical: umbilical,
            inctericia: ictericia,
            diarreiaVomito: diarreVomit,
            dificuldadeRespirar: dificulResp,
            febre: febre,
            hipotermia: hipotermia,
            convulsoesOuMovAnor: convul,
            auscultaCardiaca: ausculta,
            aberturaOcular: aberOcu,
            pupilasNormais: pupilas,
            estrabismo: estrabismo,
            patientID: getIdPatient(),
            pediatraID: getId(),
        }
        console.log(body)
            http
                .post('/consulta' , body)
                .then((res) => {
                    console.log(res)
                    console.log('go')
                    history.push('/home');
                })
                .catch((err) => {
                    console.log(err.response)
                })

    }

    return (
        <Container>
            <Form>
                <h1 style={{ marginBottom: '4px', color: 'white' }}>Adicionar Consulta</h1>
          
                <h1 style={{ color: '#D190EE', marginTop: '20px', marginRight: '300px' }}>Medidas </h1>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '20px', marginLeft: '210px', width: '550px' }}>
                    <Input>
                        <h2>Perímetro Cefálico (cm)</h2>
                        <input
                            style={{ width: '40%' }}
                            onChange={e => setPCefalico(e.target.value)}
                            placeholder="Perímetro Cefálico (cm)"
                            type="text"
                            value={pCefalico}
                        />
                    </Input>
                    <Input>
                        <h2 >Peso (kg)</h2>
                        <input
                            style={{ width: '40%' }}
                            onChange={e => setPeso(e.target.value)}
                            placeholder="Peso (kg)"
                            type="text"
                            value={peso}
                        />
                    </Input>
                    <Input>
                        <h2>Comprimento (cm)</h2>
                        <input
                            style={{ width: '40%' }}
                            onChange={e => setComp(e.target.value)}
                            placeholder="Comprimento (cm)"
                            type="text"
                            value={comp}
                        />
                    </Input>
                </div>
                 <h1 style={{ color: '#D190EE', marginTop: '20px', marginRight: '50px' }}>Aleitamento/alimentação </h1>
                <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', marginLeft: '110px', width: '450px' }}>
                    <h2 style={{ marginRight: '20px', marginTop: '10px', color: 'white', fontSize: '15px', marginLeft: '7px' }}>Leite materno exclusivo (LME)</h2>
                    <FormControlLabel control={<Checkbox />} onChange={e => setLeiteLME(true)}/>
                </div>
                <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', width: '560px' }}>
                    <h2 style={{ marginRight: '20px', marginTop: '10px', color: 'white', fontSize: '15px', marginLeft: '115px' }}>Leite materno e leite artificial (LM+LA)</h2>
                    <FormControlLabel control={<Checkbox />} onChange={e => setLeiteLMLA(true)} />
                </div>
                <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', width: '550px' }}>
                    <h2 style={{ marginRight: '20px', marginTop: '10px', color: 'white', fontSize: '15px', marginLeft: '110px' }}>Dificuldades para amamentar ?</h2>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        onChange={e => setAmamentar(e.target.value)}
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value={true} control={<Radio />} label="Sim" />
                        <FormControlLabel value={false} control={<Radio />} label="Não" />
                    </RadioGroup>
                </div>
                <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', width: '550px' }}>
                    <h2 style={{ marginRight: '20px', marginTop: '10px', color: 'white', fontSize: '15px', marginLeft: '110px' }}>Parou de amamentar ?</h2>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        onChange={e => setStopAmamentar(e.target.value)}
                        name="radio-buttons-group"
                    >
                         <FormControlLabel value={true} control={<Radio />} label="Sim" />
                        <FormControlLabel value={false} control={<Radio />} label="Não" />
                    </RadioGroup>
                </div>
                <h1 style={{ color: '#D190EE', marginTop: '20px', marginRight: '190px' }}>Sinais de alerta </h1>
                <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', width: '550px' }}>
                    <h2 style={{ marginRight: '20px', marginTop: '10px', color: 'white', fontSize: '15px', marginLeft: '110px' }}>Coto umbilical infectado</h2>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                        onChange={e => setUmbical(e.target.value)}
                    >
                         <FormControlLabel value={true} control={<Radio />} label="Sim" />
                        <FormControlLabel value={false} control={<Radio />} label="Não" />
                    </RadioGroup>
                </div>
                <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', width: '550px' }}>
                    <h2 style={{ marginRight: '20px', marginTop: '10px', color: 'white', fontSize: '15px', marginLeft: '110px' }}>Icterícia</h2>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                        onChange={e => setIctericia(e.target.value)}
                    >
                        <FormControlLabel value={true} control={<Radio />} label="Sim" />
                        <FormControlLabel value={false} control={<Radio />} label="Não" />
                    </RadioGroup>
                </div>
                <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', width: '550px' }}>
                    <h2 style={{ marginRight: '20px', marginTop: '10px', color: 'white', fontSize: '15px', marginLeft: '110px' }}>Diarreia/Vômitos</h2>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                        onChange={e => setDiarreVomit(e.target.value)}
                    >
                        <FormControlLabel value={true} control={<Radio />} label="Sim" />
                        <FormControlLabel value={false} control={<Radio />} label="Não" />
                    </RadioGroup>
                </div>
                <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', width: '550px' }}>
                    <h2 style={{ marginRight: '20px', marginTop: '10px', color: 'white', fontSize: '15px', marginLeft: '110px' }}>Dificuldades de respirar</h2>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                        onChange={e => setDificulResp(e.target.value)}
                    >
                       <FormControlLabel value={true} control={<Radio />} label="Sim" />
                        <FormControlLabel value={false} control={<Radio />} label="Não" />
                    </RadioGroup>
                </div>
                <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', width: '550px' }}>
                    <h2 style={{ marginRight: '20px', marginTop: '10px', color: 'white', fontSize: '15px', marginLeft: '110px' }}>Febre (≥37,5°C)</h2>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                        onChange={e => setFebre(e.target.value)}
                    >
                        <FormControlLabel value={true} control={<Radio />} label="Sim" />
                        <FormControlLabel value={false} control={<Radio />} label="Não" />
                    </RadioGroup>
                </div>
                <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', width: '550px' }}>
                    <h2 style={{ marginRight: '20px', marginTop: '10px', color: 'white', fontSize: '15px', marginLeft: '110px' }}>Hipotermia (+36,5°C) </h2>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        onChange={e => setHipotermia(e.target.value)}
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value={true} control={<Radio />} label="Sim" />
                        <FormControlLabel value={false} control={<Radio />} label="Não" />
                    </RadioGroup>
                </div>
                <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', width: '550px' }}>
                    <h2 style={{ marginTop: '10px', color: 'white', fontSize: '15px', marginLeft: '110px' }}>Convulsões ou
                        movimentos anormais</h2>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                        onChange={e => setConvul(e.target.value)}
                    >
                       <FormControlLabel value={true} control={<Radio />} label="Sim" />
                        <FormControlLabel value={false} control={<Radio />} label="Não" />
                    </RadioGroup>
                </div>
                <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', width: '550px' }}>
                    <h2 style={{ marginTop: '10px', color: 'white', fontSize: '15px', marginLeft: '110px' }}>Ausculta cardíaca alterada/Cianose</h2>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                        onChange={e => setAusculta(e.target.value)}
                    >
                      <FormControlLabel value={true} control={<Radio />} label="Sim" />
                    <FormControlLabel value={false} control={<Radio />} label="Não" />
                    </RadioGroup>
                </div>
                <h1 style={{ color: '#D190EE', marginTop: '20px', marginRight: '190px', marginLeft: '-100px' }}>Exame ocular </h1>
                <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', width: '550px' }}>
                    <h2 style={{ marginTop: '10px', color: 'white', fontSize: '15px', marginLeft: '110px' }}>Abertura ocular normal</h2>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        onChange={e => setAbertOcu(e.target.value)}
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value={true} control={<Radio />} label="Sim" />
                        <FormControlLabel value={false} control={<Radio />} label="Não" />
                    </RadioGroup>
                </div>
                <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', width: '550px' }}>
                    <h2 style={{ marginTop: '10px', color: 'white', fontSize: '15px', marginLeft: '110px' }}>Pupilas normais</h2>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        onChange={e => setPupilas(e.target.value)}
                        name="radio-buttons-group"
                    >
                         <FormControlLabel value={true} control={<Radio />} label="Sim" />
                        <FormControlLabel value={false} control={<Radio />} label="Não" />
                    </RadioGroup>
                </div>
                <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', width: '550px' }}>
                    <h2 style={{ marginTop: '10px', color: 'white', fontSize: '15px', marginLeft: '110px' }}>Estrabismo</h2>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        onChange={e => setEstrabismo(e.target.value)}
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value={true} control={<Radio />} label="Sim" />
                        <FormControlLabel value={false} control={<Radio />} label="Não" />
                    </RadioGroup>
                </div>


            </Form>
            <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between'}}>
                <button onClick={linkHome}>
                    Voltar para prontuario
                </button>
                <button onClick={addConsulta}>
                Confirmar
            </button>
            </div>
        </Container>
    );
}

export default ConsultasRestantes;