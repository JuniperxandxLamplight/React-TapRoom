import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>TapRoom</h1>
      <style jsx>{`
        div{
          width: 100%;
        }
        h1{
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export default Header;
