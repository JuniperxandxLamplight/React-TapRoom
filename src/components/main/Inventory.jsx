import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import KegList from './KegList';

function Inventory(props){

  return (
    <div>
      <KegList onRefillKeg={props.onRefillKeg} kegs={props.kegs}></KegList>
      <style jsx>{`
        div{
          float: right;
          width: 90%;
        }
        `}</style>
    </div>
  );
}

Inventory.propTypes = {
  onRefillKeg: PropTypes.func,
  kegs:  PropTypes.object
}

export default Inventory;
