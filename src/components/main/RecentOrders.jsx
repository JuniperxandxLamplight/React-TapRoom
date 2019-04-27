import React from 'react';
import {v4} from 'uuid';
import PropTypes from 'prop-types';

function RecentOrders(props){
  return(
    <div>
      <h1>Recent Orders</h1>
      {props.orders.map((order, i) =>
        <section key={v4()}>
          <h4>{order.name}</h4>
          <p>{order.pints} Pints ${order.price}</p>
          <p>{order.time} {order.date}</p>
        </section>
      )}
      <style jsx>{`
        div{
          width: 50%;
        }
        section{
          padding-left: 3px;
          transition: border .3s;
        }
        section:hover{
          border-left: 3px solid maroon;
        }
      `}</style>
    </div>
  );
}

RecentOrders.propTypes = {
  orders: PropTypes.array
}

export default RecentOrders;
