import React from 'react';
import { Link } from 'react-router-dom';
import KegList from './KegList';

function Inventory(props){

  return (
    <div>
      <KegList kegs={props.kegs}></KegList>
    </div>
  );
}

export default Inventory;
