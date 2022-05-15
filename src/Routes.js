import React, { useContext } from "react";
import Cadastro from "./Pages/Cadastro"
import TelaInicial from "./Pages/TelaInicial";
import Grafico from "./Pages/Graficos"
import AddConsulta from "./Pages/AddConsulta";
import Login from "./Pages/Login";
import Paciente from "./Pages/AddPaciente"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Context } from "./Context/contextAPI";
import { Redirect } from "react-router-dom";

const Routes = () => {
  
  
  function PrivateRoute({isPrivate,  ...rest}){
    let {auth, loading} = useContext(Context);
    console.log(auth);
    console.log(loading);
    if(loading){
      return <h1>loading</h1>
    }
    if(!auth && isPrivate){
      return <Redirect to="/" />
    }
    return <Route {...rest} />
  }

    return (
      <Router >
      <Switch>
          <Route exact path="/" component={Login} /> 
          <Route path={"/cadastro"} component={Cadastro} />
          <PrivateRoute isPrivate path="/graficos" component={Grafico} />
          <PrivateRoute isPrivate path={"/home"} component={TelaInicial} />
          <PrivateRoute isPrivate path="/addConsulta" component={AddConsulta} />
          <PrivateRoute isPrivate path="/addPaciente" component={Paciente} />
        </Switch>
      </Router>

    );
  };
  
  export default Routes;