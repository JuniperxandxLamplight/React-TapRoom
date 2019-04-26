import React from 'react';

function RecentOrders(props){
  return(
    <div>
      <h1>Recent Orders</h1>
      {props.orders.map((order, i) =>
        <h4>{order.name}</h4>
        <p>{order.date} {order.time}</p>
      )}
    </div>
  );
}

export default RecentOrders;
