import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ButtonAdd, Container } from './style';
import Prontuario from '../Prontuario';
import Atendimento from '../Atendimento'
import http from '../../Services/httpRequest';
import { getIdPatient } from '../../Services/auth';
import useSWR from 'swr';
import RestoConsultas from '../RestoConsultas';
import { Button } from '@mui/material';


const useFetch = (url) => {
    const { data, error, mutate } = useSWR(url, async url => {
      const response = await http.get(url);
  
      return response.data;
    })
  
    return { data, error, mutate }
  
  }
  


const Consulta = () => {
    const [valuee, setValuee] = useState(0);
    const history = useHistory();
    const [consu, setConsu] = useState([]);

    const [patient, setPatient] = useState([]);

    useEffect(() => { 
        (async () => {
          const response = await http.get(`/consulta/frompatient/${getIdPatient()}`);
          console.log(response.data.consults);
          setConsu(response.data.consults);
        })();
      }, []);

    

 
  
    const handleChange = (event) => {
        setValuee(event.target.value);
    };

    const linkGraficos = () => {
        history.push('/graficos');
    }

    const linkConsulta = () => {
        history.push('/addConsulta');
    }

    console.log(valuee)

    return (
        <Container>
            
            <div style={{ width: '80%', marginTop: '20px', marginLeft: '10%', marginBottom: '20px' }}>
                <FormControl fullWidth style={{ background: '#d69af0', borderRadius: '10px', }}>
                    <InputLabel id="demo-simple-select-label">Consulta</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={valuee}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={1}>1º Consulta</MenuItem>
                        <MenuItem value={2}>Consulta do 1º mês</MenuItem>
                        {consu.map((item, index) => {
                            return (
                                 <MenuItem value={item.consulta} >{item.consulta}º Consulta</MenuItem>  
                            )
                        })}


                    </Select>
                </FormControl>
            </div>
            {valuee === 1 ? <Prontuario /> : null}
            {valuee === 2 ? <Atendimento /> : null}
            {valuee > 2  ? <RestoConsultas consulta={valuee}/> : null}
          
                {/* {valuee === 10 ? <Prontuario /> : null} */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: '100px',
                    marginLeft: '10%',
                    marginRight: '10%'
                }}>
                    <ButtonAdd onClick={linkConsulta} style={{marginLeft: '570px'}}>
                        Adicionar Consulta
                    </ButtonAdd>
                    <ButtonAdd onClick={linkGraficos} style={{marginLeft: '56%', marginRight: '10px'}}>
                        Ver Graficos
                    </ButtonAdd>
                </div>
          
        </Container>
    )
}

export default Consulta;