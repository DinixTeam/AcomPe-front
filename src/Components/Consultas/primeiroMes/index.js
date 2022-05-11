import React from 'react';
import { Form, Container, Input } from './style';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import { useHistory } from "react-router-dom";

const PrimeiroMes = () => {

    const history = useHistory();



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
                <h1 style={{ color: '#D190EE', marginTop: '20px', marginRight: '50px'}}>Aleitamento/alimentação </h1>
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
                        defaultValue="Não"
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
                        defaultValue="Não"
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
                        defaultValue="Não"
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
                        defaultValue="Não"
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
                        defaultValue="Não"
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
                        defaultValue="Não"
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
                        defaultValue="Não"
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
                        defaultValue="Não"
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
                        defaultValue="Não"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                        <FormControlLabel value="Não" control={<Radio />} label="Não" />
                    </RadioGroup>
                </div>
                <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', width: '550px' }}>
                    <h2 style={{marginTop: '10px', color: 'white', fontSize: '15px', marginLeft: '110px'}}>Ausculta cardíaca alterada/Cianose</h2>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="Não"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                        <FormControlLabel value="Não" control={<Radio />} label="Não" />
                    </RadioGroup>
                </div>
                <h1 style={{ color: '#D190EE', marginTop: '20px', marginRight: '190px', marginLeft: '-100px' }}>Vacinas </h1>
                <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', width: '550px' }}>
                    <h2 style={{marginTop: '10px', color: 'white', fontSize: '15px', marginLeft: '110px'}}>Hepatite B</h2>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="Não"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                        <FormControlLabel value="Não" control={<Radio />} label="Não" />
                    </RadioGroup>
                </div>
                <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', width: '550px' }}>
                    <h2 style={{marginTop: '10px', color: 'white', fontSize: '15px', marginLeft: '110px'}}>BCG</h2>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="Não"
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