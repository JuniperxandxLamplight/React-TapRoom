import React from 'react';
import {v4} from 'uuid';

function RecentOrders(props){
  return(
    <div>
      <h1>Recent Orders</h1>
      {props.orders.map((order, i) =>
        <section key={v4()}>
          <h4>{order.name}</h4>
          <p>{order.pints} Pints</p>
          <p>{order.time} {order.date}</p>
        </section>
      )}
      <style jsx>{`
        div{
          width: 50%;
        }
      `}</style>
    </div>
  );
}

export default RecentOrders;
