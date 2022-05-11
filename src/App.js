import React from "react";
import { AuthPorvider } from "./Context/contextAPI";

import Routes from "./Routes";
import GlobalStyle from "./Styles/GlobalStyle";


const App = () => {
  
  return (
    <div>
      <AuthPorvider>
        <GlobalStyle />
        <Routes />
      </AuthPorvider>
     
    </div>
  );
};

export default App;
