import React from 'react';
import { Link } from 'react-router-dom';
import Keg from './Keg';


function KegList(props){
  return (
    <div>
      {Object.keys(props.kegs).map((keg, index) =>
        <Keg name={props.kegs[keg].name}
          maker={props.kegs[keg].maker}
          price={props.kegs[keg].price}
          percent={props.kegs[keg].percent}
          fullness={props.kegs[keg].fullness}
          refill={props.kegs[keg].refill}
          id={props.kegs[keg].id}
          key={props.kegs[keg].id}
          onRefillKeg={props.onRefillKeg}
        />
      )}
      <style jsx>{`
        div{
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          min-height: 450px;
          height: 80vh;
        }
        Keg{
          margin: 10px 0;
        }
      `}</style>
    </div>
  );
}

export default KegList;
