import React from "react";
import TopBar from "../../Components/TopBar";
import MenuClient from "../../Components/MenuClient";
import Grafico from "../../Components/Graficos";
import { Grid } from "../TelaInicial/style";
import Consulta from "../../Components/Consulta";
import GraficoSelect from "../../Components/GraficoSelect";

const Consultas = () => {
    return(
         <Grid>
            <TopBar />
            <MenuClient />
            {/* <GraficoSelect /> */}
            {/* <Grafico /> */}
            <Consulta />
         </Grid>
    )
}

export default Consultas;