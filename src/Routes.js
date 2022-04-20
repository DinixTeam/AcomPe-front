import React from "react";
import Login from "./Pages/Login"
import Cadastro from "./Pages/Cadastro"

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

const Routes = () => {
  
  
    return (
      <BrowserRouter>
        <Switch>
          <Route  path="/" component={Login} />
          <Route path="/cadastro" component={Cadastro} />
        </Switch>
      </BrowserRouter>
    );
  };
  
  export default Routes;