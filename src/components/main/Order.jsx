import React from 'react';
import OrderForm from './OrderForm';
import RecentOrders from './RecentOrders';

function Order(props){
  return(
    <div>
      <OrderForm onAddPint={props.onAddPint} onSubtractPint={props.onSubtractPint} onNewOrder={props.onNewOrder} pints={props.pints} kegs={props.kegs}/>
      <RecentOrders orders={props.orders}/>
      <style jsx>{`
        div{
          margin: 2vw 0 0 12vw;
        }
      `}</style>
    </div>
  );
}

export default Order;
