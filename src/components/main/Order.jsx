import React from 'react';
import OrderForm from './OrderForm';
import RecentOrders from './RecentOrders';

function Order(props){
  return(
    <div>
      <OrderForm onNewOrder={props.onNewOrder} kegs={props.kegs}/>
      <RecentOrders orders={props.orders}/>
    </div>
  );
}

export default Order;
