import React, { useContext } from "react";
import Login from "./Pages/Login"
import Cadastro from "./Pages/Cadastro"
import TelaInicial from "./Pages/TelaInicial";
import AddPaciente from "./Pages/AddPaciente"
import MenuClient from "./Components/MenuClient";
import Grafico from "./Pages/Graficos"

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
      return <Redirect to="/login" />
    }
    return <Route {...rest} />
  }

    return (
      <Router >
      <Switch>
          <Route exact path="/" component={Login} />
          <Route path={"/cadastro"} component={Cadastro} />
          <PrivateRoute path="/addPaciente" component={AddPaciente} />
          <PrivateRoute path="/graficos" component={Grafico} />
          <PrivateRoute path={"/home"} component={TelaInicial} />
        </Switch>
      </Router>

    );
  };
  
  export default Routes;