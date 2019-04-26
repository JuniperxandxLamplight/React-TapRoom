import React from 'react';
import OrderForm from './OrderForm';
import RecentOrders from './RecentOrders';

function Order(props){
  return(
    <div>
      <RecentOrders orders={props.orders}/>
      <OrderForm onAddPint={props.onAddPint} onSubtractPint={props.onSubtractPint} onNewOrder={props.onNewOrder} pints={props.pints} kegs={props.kegs}/>
      <style jsx>{`
        div{
          display: flex;
          margin: 2vw 0 0 12vw;
          font-family: sans-serif;
        }
      `}</style>
    </div>
  );
}

export default Order;
