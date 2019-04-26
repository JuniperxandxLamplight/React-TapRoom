import React from 'react';
import { Link } from 'react-router-dom';
import background from '../../assets/images/darkWood.jpg';

const linkStyle = {
  textDecoration: 'none',
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
          min-height: 80vh;
          height: 100%;
          background-image: url(${background});
          background-size: cover;
          box-shadow: 5px 5px 10px gray;
        }
        p{
          font-size: 1.5rem;
          text-decoration: none;
          color: white;
          margin: 10px;
          padding: 10px;
          border-radius: 5px;
          border: 2px solid transparent;
          transition: border .3s, box-shadow .3s;
        }
        p:hover{
          border: 2px solid white;
          box-shadow: 0px 7px 10px black;
        }
      `}</style>
    </div>
  )
}

export default Sidebar;
