import React from 'react';
import { Link } from 'react-router-dom';
import kegImg from '../assets/images/keg.jpg';
// import PropTypes from 'prop-types';

function Keg(props){
  return (
    <div className="container">
      <div className="keg">
        <img src={kegImg} />
        <section>
          <h5>{props.name}</h5>
          <p>${props.price}</p>
          <p>{props.maker}</p>
          <p>{props.fullness} Pints Left</p>
        </section>
      </div>
      <style jsx>{`
        .container{
          width: 25%;
        }
        .keg{
          display: flex;
        }
        img{
          width: 50px;
          height: 50px;
        }
      `}</style>
    </div>
  );
}

// Keg.propTypes = {
//   name: PropTypes.string,
//   maker: Proptypes.string,
//   price: Proptypes.number,
//   percent: Proptypes.number,
//   fullness: Proptypes.number
// }

export default Keg;
