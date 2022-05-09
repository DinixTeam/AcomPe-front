import React, { useState } from 'react';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Container } from './style';
import Prontuario from '../Prontuario';

const Consulta = () => {
    const [valuee, setValuee] = useState(10);

    const handleChange = (event) => {
        setValuee(event.target.value);
      };
    
    return(
        <Container>
            <div style={{width: '80%', marginTop: '20px', marginLeft: '10%', marginBottom: '20px'}}>
                <FormControl fullWidth style={{background: '#d69af0', borderRadius:'10px'}}>
                    <InputLabel id="demo-simple-select-label">Consulta</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={valuee}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>1º Consulta</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
            </FormControl>
            </div>
            {valuee === 10 ? <Prontuario /> : null}
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: '100px',
                    marginLeft: '10%',
                    marginRight: '10%'
                        }}>
                <button>
                Adicionar Consulta
                 </button>
                 <button>
                Ver Graficos
                 </button>
                </div>
           
        </Container>
    )
}

export default Consulta;