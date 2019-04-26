import React from 'react';

function RecentOrders(props){
  return(
    <div>
      <h1>Recent Orders</h1>
      {props.orders.map((order, i) =>
        <section>
          <h4>{order.name}</h4>
          <p>{order.time} {order.date}</p>
        </section>
      )}
    </div>
  );
}

export default RecentOrders;
