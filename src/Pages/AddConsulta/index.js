import React from "react";
import TopBar from "../../Components/TopBar";
import AddConsult from "../../Components/AddConsulta";
import { Grid } from "./style";


const Addconsulta = () => {
    return (
        <Grid>
            <TopBar />
            <AddConsult/>
        </Grid>
    )
}

export default Addconsulta;