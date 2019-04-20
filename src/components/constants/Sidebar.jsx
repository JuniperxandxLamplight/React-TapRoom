import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar(){
  return(
    <div>
      <Link to="/">Inventory</Link>
      <Link to="/order">New Order</Link>
      <style jsx>{`
        div{
          float: left;
          display: flex;
          flex-direction: column;
          width: 10%;
          height: 100vh;
          background: gray;
        }
      `}</style>
    </div>
  )
}

export default Sidebar;
