import React from "react";
import TopBar from "../../Components/TopBar";
import MenuClient from "../../Components/MenuClient";
import Grafico from "../../Components/Graficos";
import { Grid } from "./style";
import Consulta from "../../Components/Consulta";

const TelaInicial = () => {
    return(
         <Grid>
            <TopBar />
            <MenuClient />
            <Grafico />
            <Consulta />
         </Grid>
    )
}

export default TelaInicial;