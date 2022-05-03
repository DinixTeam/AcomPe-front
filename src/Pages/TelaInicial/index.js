import React from "react";
import TopBar from "../../Components/TopBar";
import MenuClient from "../../Components/MenuClient";
import { Grid } from "./style";

const TelaInicial = () => {
    return(
         <Grid>
            <TopBar />
            <MenuClient />
         </Grid>
    )
} 

export default TelaInicial;