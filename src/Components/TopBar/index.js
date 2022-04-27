import React from "react";
import { Container, Image, User } from "./style";
import logo from '../../Assets/logo.png'

const TopBar = () => {
    return(
        <Container>
            <Image src={logo}/>
            <User>

            </User>
        </Container>
    )
}

export default TopBar;