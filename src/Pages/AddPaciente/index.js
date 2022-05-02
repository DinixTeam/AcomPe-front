import React from "react";
import AddPacient from "../../Components/AddPatient";
import TopBar from "../../Components/TopBar";
import { Grid } from "./style";

const Addpaciente = () => {
    return(
         <Grid>
            <TopBar />
            <AddPacient/>
         </Grid>
    )
} 

export default Addpaciente;