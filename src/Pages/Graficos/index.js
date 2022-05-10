import React from "react";
import GraficoSelect from "../../Components/GraficoSelect";
import MenuClient from "../../Components/MenuClient";
import TopBar from "../../Components/TopBar";
import { Grid } from "./style";

const Graficos = () => {
    return(
        <Grid>
            <TopBar />
            <GraficoSelect />
        </Grid>
    )
}

export default Graficos;