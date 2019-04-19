import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Inventory from './Inventory';
import Error404 from './Error404';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Inventory} />
        <Route component={Error404}/>
      </Switch>
    </div>
  );
}
// <Route exact path='/' component={} />

export default App;
