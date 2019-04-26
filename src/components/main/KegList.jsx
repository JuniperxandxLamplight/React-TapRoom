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
          key={props.kegs[keg].fullness}
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
      `}</style>
    </div>
  );
}

export default KegList;
