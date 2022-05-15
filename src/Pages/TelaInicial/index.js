import React from "react";
import TopBar from "../../Components/TopBar";
import MenuClient from "../../Components/MenuClient";
import Grafico from "../../Components/Graficos";
import { Grid } from "./style";
import Consulta from "../../Components/Consulta";
import GraficoSelect from "../../Components/GraficoSelect";
import Welcome from "../../Components/Welcome";

const TelaInicial = () => {
    return(
         <Grid>
            <TopBar />
            <MenuClient />
            {/* <GraficoSelect /> */}
            {/* <Grafico /> */}
            {/* <div>opaa</div> */}
            <Welcome />
         </Grid>
    )
}

export default TelaInicial;