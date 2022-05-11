import React from 'react';
import { Container, Input, Paciente } from './style';
import { useHistory } from "react-router-dom";

const MenuClient = () => {

    const history = useHistory();

    const linkAddPaciente = () => {
        history.push('/addPaciente');
    }

    return(
     

        <Container>
            <Input>
                <input 
                placeholder='Buscar Paciente'
                    />
                    </Input>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '20px'}}>
                    <Paciente>
                        <img />
                        <h1>
                            sjadfhjdsfhua
                        </h1>
                    </Paciente>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <Paciente>
                        <img />
                        <h1>
                            sjadfhjdsfhua
                        </h1>
                    </Paciente>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <Paciente>
                        <img />
                        <h1>
                            sjadfhjdsfhua
                        </h1>
                    </Paciente>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <Paciente>
                        <img />
                        <h1>
                            sjadfhjdsfhua
                        </h1>
                    </Paciente>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <Paciente>
                        <img />
                        <h1>
                            sjadfhjdsfhua
                        </h1>
                    </Paciente>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <Paciente>
                        <img />
                        <h1>
                            sjadfhjdsfhua
                        </h1>
                    </Paciente>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <Paciente>
                        <img />
                        <h1>
                            sjadfhjdsfhua
                        </h1>
                    </Paciente>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                        <button onClick={linkAddPaciente}>
                            Adicionar Paciente +
                        </button>
                    </div>
                    
        </Container>
    )
}

export default MenuClient;