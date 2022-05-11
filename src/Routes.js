import React from "react";
import Login from "./Pages/Login"
import Cadastro from "./Pages/Cadastro"
import TelaInicial from "./Pages/TelaInicial";
import Grafico from "./Pages/Graficos"
import AddConsulta from "./Pages/AddConsulta";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Routes = () => {
  
  
    return (
      <Router >
      <Switch>
          <Route path="/" component={AddConsulta} />
          <Route path="/graficos" component={Grafico} />
          <Route exact path="/" component={Login} />
          <Route path={"/cadastro"} component={Cadastro} />
          <Route path={"/home"} component={TelaInicial} />
        </Switch>
      </Router>

    );
  };
  
  export default Routes;