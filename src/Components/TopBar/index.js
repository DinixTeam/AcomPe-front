import React, { useContext } from "react";
import { Container, Image, User } from "./style";
import logo from '../../Assets/logo.png'
import { isAuthenticated, logout } from "../../Services/auth";
import { Context } from "../../Context/contextAPI";

const TopBar = () => {

    const { desloga } = useContext(Context);

    return(
        <Container>
            <Image src={logo}/>
            <User onClick={desloga}>
               
            </User>
        </Container>
    )
}

export default TopBar;