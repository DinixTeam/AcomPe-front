import React from "react";
import TopBar from "../../Components/TopBar";
import MenuClient from "../../Components/MenuClient";
import Grafico from "../../Components/Graficos";
import { Grid } from "./style";

const TelaInicial = () => {
    return(
         <Grid>
            <TopBar />
            <MenuClient />
            <Grafico />
         </Grid>
    )
}

export default TelaInicial;