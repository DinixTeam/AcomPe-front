import React from 'react';
import { Form, Container, Input } from './style';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { useHistory } from "react-router-dom";



const PrimeiroMes = () => {

    const history = useHistory();

    const [check, setChecked] = React.useState(false);
    const [orcheck, setOr] = React.useState(false);
    const [olcheck, setOl] = React.useState(false);
    const [cocheck, setCo] = React.useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const handleOrelhinha = (event) => {
        setOr(event.target.checked);
    };
    const handleOlhinho = (event) => {
        setOl(event.target.checked);
    };
    const handlecoracaozinho = (event) => {
        setCo(event.target.checked);
    };



    const pezinho = check
        ? <div style={{ marginLeft: '80px' }}>
            <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
            >
                <FormControlLabel value="Normal" control={<Radio />} label="Normal" />
                <FormControlLabel value="Alterado" control={<Radio />} label="Alterado" />

            </RadioGroup>
        </div>
        : null;

    const orelhinha = orcheck
        ? <div style={{ marginLeft: '80px' }}>
            <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
            >
                <FormControlLabel value="Normal" control={<Radio />} label="Normal" />
                <FormControlLabel value="Alterado" control={<Radio />} label="Alterado" />

            </RadioGroup>
        </div>
        : null;

    const olhinho = olcheck
        ? <div style={{ marginLeft: '80px' }}>
            <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
            >
                <FormControlLabel value="Normal" control={<Radio />} label="Normal" />
                <FormControlLabel value="Alterado" control={<Radio />} label="Alterado" />

            </RadioGroup>
        </div>
        : null;

    const coracaozinho = cocheck
        ? <div style={{ marginLeft: '80px' }}>
            <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
            >
                <FormControlLabel value="Normal" control={<Radio />} label="Normal" />
                <FormControlLabel value="Alterado" control={<Radio />} label="Alterado" />

            </RadioGroup>
        </div>
        : null;





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
                        />
                    </Input>
                    <Input>
                        <h2 >Peso (kg)</h2>
                        <input
                            style={{ width: '40%' }}
                        />
                    </Input>
                    <Input>
                        <h2>Comprimento (cm)</h2>
                        <input
                            style={{ width: '40%' }}
                        />
                    </Input>
                </div>
                <h1 style={{ color: '#D190EE', marginTop: '20px', marginRight: '50px' }}>Triagem neonatal - Testes </h1>
                <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', marginLeft: '110px', width: '450px' }}>
                    <h2 style={{ marginRight: '20px', marginTop: '10px', color: 'white', fontSize: '15px', marginLeft: '7px' }}>Pezinho</h2>
                    <FormControlLabel control={<Checkbox checked={check} onChange={handleChange} />} />
                </div>
                {pezinho}
                <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', marginLeft: '110px', width: '450px' }}>
                    <h2 style={{ marginRight: '20px', marginTop: '10px', color: 'white', fontSize: '15px', marginLeft: '7px' }}>Orelhinha - Exame autidivo</h2>
                    <FormControlLabel control={<Checkbox checked={orcheck} onChange={handleOrelhinha} />} />
                </div>
                {orelhinha}
                <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', marginLeft: '110px', width: '450px' }}>
                    <h2 style={{ marginRight: '20px', marginTop: '10px', color: 'white', fontSize: '15px', marginLeft: '7px' }}>Olhinho - Reflexo olho vermelho</h2>
                    <FormControlLabel control={<Checkbox checked={olcheck} onChange={handleOlhinho} />} />
                </div>
                {olhinho}
                <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', marginLeft: '110px', width: '450px' }}>
                    <h2 style={{ marginRight: '20px', marginTop: '10px', color: 'white', fontSize: '15px', marginLeft: '7px' }}>Coraçãozinho</h2>
                    <FormControlLabel control={<Checkbox checked={cocheck} onChange={handlecoracaozinho} />} />
                </div>
                {coracaozinho}
                <h1 style={{ color: '#D190EE', marginTop: '20px', marginRight: '50px' }}>Aleitamento/alimentação </h1>
                <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', marginLeft: '110px', width: '450px' }}>
                    <h2 style={{ marginRight: '20px', marginTop: '10px', color: 'white', fontSize: '15px', marginLeft: '7px' }}>Leite materno exclusivo (LME)</h2>
                    <FormControlLabel control={<Checkbox />} />
                </div>
                <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', width: '560px' }}>
                    <h2 style={{ marginRight: '20px', marginTop: '10px', color: 'white', fontSize: '15px', marginLeft: '115px' }}>Leite materno e leite artificial (LM+LA)</h2>
                    <FormControlLabel control={<Checkbox />} />
                </div>
                <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', width: '550px' }}>
                    <h2 style={{ marginRight: '20px', marginTop: '10px', color: 'white', fontSize: '15px', marginLeft: '110px' }}>Dificuldades para amamentar ?</h2>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"

                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                        <FormControlLabel value="Não" control={<Radio />} label="Não" />
                    </RadioGroup>
                </div>
                <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', width: '550px' }}>
                    <h2 style={{ marginRight: '20px', marginTop: '10px', color: 'white', fontSize: '15px', marginLeft: '110px' }}>Parou de amamentar ?</h2>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"

                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                        <FormControlLabel value="Não" control={<Radio />} label="Não" />
                    </RadioGroup>
                </div>
                <h1 style={{ color: '#D190EE', marginTop: '20px', marginRight: '190px' }}>Sinais de alerta </h1>
                <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', width: '550px' }}>
                    <h2 style={{ marginRight: '20px', marginTop: '10px', color: 'white', fontSize: '15px', marginLeft: '110px' }}>Coto umbilical infectado</h2>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                        <FormControlLabel value="Não" control={<Radio />} label="Não" />
                    </RadioGroup>
                </div>
                <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', width: '550px' }}>
                    <h2 style={{ marginRight: '20px', marginTop: '10px', color: 'white', fontSize: '15px', marginLeft: '110px' }}>Icterícia</h2>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                        <FormControlLabel value="Não" control={<Radio />} label="Não" />
                    </RadioGroup>
                </div>
                <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', width: '550px' }}>
                    <h2 style={{ marginRight: '20px', marginTop: '10px', color: 'white', fontSize: '15px', marginLeft: '110px' }}>Diarreia/Vômitos</h2>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                        <FormControlLabel value="Não" control={<Radio />} label="Não" />
                    </RadioGroup>
                </div>
                <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', width: '550px' }}>
                    <h2 style={{ marginRight: '20px', marginTop: '10px', color: 'white', fontSize: '15px', marginLeft: '110px' }}>Dificuldades de respirar</h2>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                        <FormControlLabel value="Não" control={<Radio />} label="Não" />
                    </RadioGroup>
                </div>
                <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', width: '550px' }}>
                    <h2 style={{ marginRight: '20px', marginTop: '10px', color: 'white', fontSize: '15px', marginLeft: '110px' }}>Febre (≥37,5°C)</h2>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                        <FormControlLabel value="Não" control={<Radio />} label="Não" />
                    </RadioGroup>
                </div>
                <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', width: '550px' }}>
                    <h2 style={{ marginRight: '20px', marginTop: '10px', color: 'white', fontSize: '15px', marginLeft: '110px' }}>Hipotermia (+36,5°C) </h2>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                        <FormControlLabel value="Não" control={<Radio />} label="Não" />
                    </RadioGroup>
                </div>
                <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', width: '550px' }}>
                    <h2 style={{ marginTop: '10px', color: 'white', fontSize: '15px', marginLeft: '110px' }}>Convulsões ou
                        movimentos anormais</h2>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                        <FormControlLabel value="Não" control={<Radio />} label="Não" />
                    </RadioGroup>
                </div>
                <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', width: '550px' }}>
                    <h2 style={{ marginTop: '10px', color: 'white', fontSize: '15px', marginLeft: '110px' }}>Ausculta cardíaca alterada/Cianose</h2>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                        <FormControlLabel value="Não" control={<Radio />} label="Não" />
                    </RadioGroup>
                </div>
                <h1 style={{ color: '#D190EE', marginTop: '20px', marginRight: '190px', marginLeft: '-100px' }}>Exame ocular </h1>
                <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', width: '550px' }}>
                    <h2 style={{ marginTop: '10px', color: 'white', fontSize: '15px', marginLeft: '110px' }}>Abertura ocular normal</h2>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                        <FormControlLabel value="Não" control={<Radio />} label="Não" />
                    </RadioGroup>
                </div>
                <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', width: '550px' }}>
                    <h2 style={{ marginTop: '10px', color: 'white', fontSize: '15px', marginLeft: '110px' }}>Pupilas normais</h2>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                        <FormControlLabel value="Não" control={<Radio />} label="Não" />
                    </RadioGroup>
                </div>
                <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', width: '550px' }}>
                    <h2 style={{ marginTop: '10px', color: 'white', fontSize: '15px', marginLeft: '110px' }}>Estrabismo</h2>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                        <FormControlLabel value="Não" control={<Radio />} label="Não" />
                    </RadioGroup>
                </div>


            </Form>
        </Container>
    );
}

export default PrimeiroMes;