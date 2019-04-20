import React from 'react';
import { Link } from 'react-router-dom';
import headerBackground from '../../assets/images/darkWood.jpg';

function Header(){
  return (
    <div>
      <h1>TapRoom</h1>
      <style jsx>{`
        div{
          width: 100%;
          background-image: url(${headerBackground});\
          box-shadow: 0px 5px 10px gray;
        }
        h1{
          margin: 0;
          padding: 10px 0;
          font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
          font-size: 3rem;
          text-align: center;
          color: lightgray;
        }
      `}</style>
    </div>
  );
}

export default Header;
