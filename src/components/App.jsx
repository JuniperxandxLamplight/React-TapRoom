import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './constants/Header';
import Sidebar from './constants/Sidebar';
import Inventory from './main/Inventory';
import Order from './main/Order';
import Error404 from './Error404';

function App(){
  return (
    <div>
      <Header/>
      <Sidebar/>
      <Switch>
        <Route exact path='/' component={Inventory} />
        <Route path='/order' component={Order} />
        <Route component={Error404}/>
      </Switch>
    </div>
  );
}

export default App;
