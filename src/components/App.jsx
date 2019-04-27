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
          refill: false,
          id: 'orig1'
        },
        orig2: {
          name: 'White Light',
          maker: 'Great Notion',
          price: 5,
          percent: 5.8,
          fullness: 80,
          refill: false,
          id: 'orig2'
        },
        orig3: {
          name: 'Coconut Mochi',
          maker: 'Great Notion',
          price: 5,
          percent: 7,
          fullness: 40,
          refill: false,
          id: 'orig3'
        },
        orig4: {
          name: 'Puppy Love',
          maker: 'Great Notion',
          price: 5,
          percent: 5.4,
          fullness: 111,
          refill: false,
          id: 'orig4'
        },
        orig5: {
          name: 'Carnival',
          maker: 'Great Notion',
          price: 5,
          percent: 9,
          fullness: 20,
          refill: true,
          id: 'orig5'
        },
        orig6: {
          name: 'Double Stack',
          maker: 'Great Notion',
          price: 5,
          percent: 4,
          fullness: 57,
          refill: false,
          id: 'orig6'
        }
      },
      Orders: [],
      Pints: 1
    }
    this.handleNewOrder = this.handleNewOrder.bind(this);
    this.handleAddPint = this.handleAddPint.bind(this);
    this.handleSubtractPint = this.handleSubtractPint.bind(this);
    this.handleRefillKeg = this.handleRefillKeg.bind(this);
  }

  handleAddPint(){
    let stateSlice = Object.assign({}, this.state);
      stateSlice.Pints += 1;
    this.setState({Pints: stateSlice.Pints});
    console.log(this.state);
  }
  handleSubtractPint(){
    let stateSlice = Object.assign({}, this.state);
    if (stateSlice.Pints === 1){
      return;
    } else {
      stateSlice.Pints -= 1;
    }
    this.setState({Pints: stateSlice.Pints});
  }

  handleNewOrder(beer, price){
    const dateObject = new Date();
    const orderDay = dateObject.getDate();
    const orderMonth = dateObject.getMonth();
    const orderHours = dateObject.getHours();
    const orderMinutes = dateObject.getMinutes();
    const date = `${orderMonth}/${orderDay}`;
    const time = `${orderHours}:${orderMinutes}`;
    let stateSlice = Object.assign({}, this.state);
    stateSlice.Kegs[beer].fullness -= this.state.Pints;
    if (stateSlice.Kegs[beer].fullness <= 20){
      stateSlice.Kegs[beer].refill = true;
    }
    stateSlice.Orders.unshift({name: stateSlice.Kegs[beer].name, pints: stateSlice.Pints, price: price, date: date, time: time});
    stateSlice.Pints = 1;
    this.setState(stateSlice);
  }

  handleRefillKeg(id){
    let stateSlice = Object.assign({}, this.state);
    stateSlice.Kegs[id].fullness = 120;
    stateSlice.Kegs[id].refill = false;
    this.setState(stateSlice);
  }

  render(){
    return (
      <div>
      <Header/>
      <Sidebar/>
      <Switch>
      <Route exact path='/' render={() => <Inventory onRefillKeg={this.handleRefillKeg} kegs={this.state.Kegs} />}/>
      <Route path='/order' render={() => <Order onAddPint={this.handleAddPint} onSubtractPint={this.handleSubtractPint} onNewOrder={this.handleNewOrder} pints={this.state.Pints} kegs={this.state.Kegs} orders={this.state.Orders}/>} />
      <Route component={Error404}/>
      </Switch>
      </div>
    );
  }
}

export default App;
