import React from 'react';
import { Link } from 'react-router-dom';
import bubbles from '../assets/images/bubbles.png';
import kegWood from '../assets/images/kegWood.jpg';

function Keg(props){

  function percent(pints){
    const percent = pints/120 * 100;
    return percent;
  }

  return (
    <div className="container">
      <div className="keg">
        <div className="fill"><div className="liquid"><img src={bubbles}/></div></div>
        <section>
          <h5>{props.name}</h5>
          <p>${props.price}</p>
          <p>{props.maker}</p>
          <p>{props.fullness} Pints Left</p>
        </section>
      </div>
      <style jsx>{`
        .container{
          width: 23%;
          height: 25%;
          margin: 20px 1% 0 1%;
          text-align: center;
        }
        .keg{
          display: flex;
        }
        .fill{
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          width: 50%;
          background-image:  url(${kegWood});
          background-size: cover;
          border-radius: 40%;
          overflow: hidden;
        }
        .liquid{
          width: 100%;
          height: ${percent(props.fullness)}%;
          background-color: goldenrod;
          border-top: 4px solid white;
        }
        img{
          width: 100%;
          height: auto;
        }
        section{
          width: 50%;
        }
        h5{
          font-size: 1.5rem;
          margin-bottom: 0;
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
