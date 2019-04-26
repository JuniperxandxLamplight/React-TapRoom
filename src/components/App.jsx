import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './constants/Header';
import Sidebar from './constants/Sidebar';
import Inventory from './main/Inventory';
import Order from './main/Order';
import Error404 from './Error404';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      Kegs: {
        orig1: {
          name: 'Luminous 04',
          maker: 'Great Notion',
          price: 5,
          percent: 6,
          fullness: 100,
          id: 'orig1'
        },
        orig2: {
          name: 'White Light',
          maker: 'Great Notion',
          price: 5,
          percent: 5.8,
          fullness: 80,
          id: 'orig2'
        },
        orig3: {
          name: 'Coconut Mochi',
          maker: 'Great Notion',
          price: 5,
          percent: 7,
          fullness: 40,
          id: 'orig3'
        },
        orig4: {
          name: 'Puppy Love',
          maker: 'Great Notion',
          price: 6,
          percent: 5.4,
          fullness: 111,
          id: 'orig4'
        },
        orig5: {
          name: 'Carnival',
          maker: 'Great Notion',
          price: 7,
          percent: 9,
          fullness: 20,
          id: 'orig5'
        },
        orig6: {
          name: 'Double Stack',
          maker: 'Great Notion',
          price: 4,
          percent: 4,
          fullness: 57,
          id: 'orig6'
        }
      },
      Orders: []
    }
  }

  handleNewOrder(beer, date, time){
    let stateSlice = {...this.state, Kegs[beer].fullnes -= 1};
    stateSlice.Orders.push({})
  }

  render(){
    return (
      <div>
      <Header/>
      <Sidebar/>
      <Switch>
      <Route exact path='/' render={() => <Inventory kegs={this.state.Kegs} />}/>
      <Route path='/order' render={() => <Order kegs={this.state.Kegs} orders={this.state.Orders}/>} />
      <Route component={Error404}/>
      </Switch>
      </div>
    );
  }
}

export default App;
