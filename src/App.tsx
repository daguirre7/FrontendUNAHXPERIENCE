import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Index from "./views/index";
import Nuevo from "./views/nuevo";
import NuevoEstudiante from "./views/create-estudiante";
import Docente from "./views/docente";
import Perfil from "./views/perfil";
import Docentes from "./views/docentes"

import './css/vendor/bootstrap/css/bootstrap.min.css';
import './css/main.css';

const App: React.FC = () => ( 
  <BrowserRouter>
      <Switch>
          <Route path="/index" exact component={Index}/>
          <Route path="/nuevo" exact component={Nuevo}/>
          <Route path="/nuevoestudiante" exact component={NuevoEstudiante}/>
  {/*         <Route path="/docente" exact component={Docente}/> */}
          <Route path="/docente/:id" exact component={Docente}/>
          <Route path="/perfil" exact component={Perfil}/>
          <Route path="/docentes" exact component={Docentes}/>
      </Switch>
  </BrowserRouter>
  
);

export default App;
