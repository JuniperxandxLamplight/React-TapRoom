import React from 'react';
import { Link } from 'react-router-dom';
import background from "../../assets/images/sideWood.jpg";

function Sidebar(){
  return(
    <div>
      <Link to="/"><p>Inventory</p></Link>
      <Link to="/order"><p>Order</p></Link>
      <style jsx>{`
        div{
          float: left;
          display: flex;
          flex-direction: column;
          width: 10%;
          height: 100vh;
          background-image: url(${background});
          background-size: cover;
        }
        p{
          text-decoration: none;
          color: white;
        }
      `}</style>
    </div>
  )
}

export default Sidebar;
