import React from 'react';
import { Link } from 'react-router-dom';
import bubbles from '../../assets/images/bubbles.png';
import kegWood from '../../assets/images/kegWood.jpg';

function Keg(props){

  function percent(pints){
    const percent = pints/120 * 100;
    return percent;
  }

  function handleRefill(event){
    event.preventDefault();
    props.onRefillKeg(props.id);
  }

  let refillButton = 'clear'
  if(props.refill){
    refillButton = 'btn'
  } else if (!props.refill){
    refillButton = 'clear'
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
          <button onClick={handleRefill} className={refillButton}>Refill</button>
        </section>
      </div>
      <style jsx>{`
        .container{
          width: 30%;
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
          transition: height 1s;
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
        .clear{
          background: transparent;
          color: transparent;
          border: none;
        }
        .btn{
          font-size: 1.5rem;
          padding: 5px 15px;
          background: transparent;
          border-radius: 10px;
          border: none;
          transition: border .3s, box-shadow .3s;
        }
        .btn:hover{
          border: 2px solid maroon;
          box-shadow: 0px 3px 7px gray;
        }
        .btn:focus, .clear:focus{
          outline: none;
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
