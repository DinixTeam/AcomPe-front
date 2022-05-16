import React, { useContext, useEffect, useState } from "react";
import { Container, Image, User } from "./style";
import logo from '../../Assets/logo.png'
import { getId } from '../../Services/auth';
import http from '../../Services/httpRequest';
import { Context } from "../../Context/contextAPI";

const TopBar = () => {

    const { desloga } = useContext(Context);

    const [medico, setMedico] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await http.get(`/pediatra/${getId()}`);
            console.log(response.data);
            setMedico(response.data);
        })();
    }, []);

    return (
        <Container>
            <Image src={logo} />
            <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row'}}> 
                <h2> {medico.username} </h2>
                <User onClick={desloga}>
                    x
                </User>
            </div>

        </Container>
    )
}

export default TopBar;