import React from 'react';
import { Link } from 'react-router-dom';
import background from "../../assets/images/sideWood.jpg";

const linkStyle = {
  textDecoration: 'none',
  // marginLeft: '30px'
}

function Sidebar(){
  return(
    <div>
      <Link to="/" style={linkStyle}><p>Inventory</p></Link>
      <Link to="/order" style={linkStyle}><p>Order</p></Link>
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
          font-size: 1.5rem;
          text-decoration: none;
          color: white;
          margin: 10px;
          padding: 10px;
          border-radius: 5px;
          border: 2px solid transparent;
          transition: border .3s;
        }
        p:hover{
          border: 2px solid white;
        }
      `}</style>
    </div>
  )
}

export default Sidebar;
