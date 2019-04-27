import React from 'react';
import PropTypes from 'prop-types';
import OrderForm from './OrderForm';
import RecentOrders from './RecentOrders';

function Order(props){
  return(
    <div>
      <RecentOrders orders={props.orders}/>
      <OrderForm onAddPint={props.onAddPint} onSubtractPint={props.onSubtractPint} onNewOrder={props.onNewOrder} pints={props.pints} kegs={props.kegs}/>
      <style jsx>{`
        div{
          float: right;
          width: 88%;
          display: flex;
          font-family: sans-serif;
        }
        `}</style>
    </div>
  );
}

Order.propTypes = {
  onAddPint: PropTypes.func,
  onSubtractPint: PropTypes.func,
  onNewOrder: PropTypes.func,
  pints: PropTypes.number,
  kegs: PropTypes.object,
  orders: PropTypes.array
}

export default Order;
