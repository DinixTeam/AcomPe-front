import React, { useEffect, useState } from 'react';
import { ButtonAdd, Container, Input, Paciente } from './style';
import { useHistory } from "react-router-dom";
import http from '../../Services/httpRequest';
import { getId, getIdPatient, idPatient, removerPatient } from '../../Services/auth';

const MenuClient = () => {

    const history = useHistory();

    const linkAddPaciente = () => {
        history.push('/addPaciente');
    }

    const [patient, setPatient] = useState([]);

    useEffect(() => { 
        (async () => {
          const response = await http.get(`/pediatra/readpatients/${getId()}`);
          console.log(response.data);
          setPatient(response.data);
        })();
      }, []);

      const clickPatient = (id) => {
        
      }

      const click = () => {
        history.push('/consultas');
      }

    return(
        <Container>
            <Input>
                <input 
                placeholder='Buscar Paciente'
                    />
                    </Input>
                    {patient.map((item, key)=> (
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            marginTop: '20px',
                            cursor: 'pointer'
                            
                        }} 
                        onClick={e => {
                            removerPatient()
                            idPatient(item._id)
                            console.log(getIdPatient())
                            window.location.reload()
                        }} >
                            <Paciente onClick={click}>
                                <img />
                                <h1>
                                    {item.name}
                                </h1>
                            </Paciente>
                        </div>
                    ))}
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                        <ButtonAdd onClick={linkAddPaciente}>
                            Adicionar Paciente +
                        </ButtonAdd>
                    </div>
                    
        </Container>
    )
}

export default MenuClient;