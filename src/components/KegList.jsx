import React from 'react';
import { Link } from 'react-router-dom';
import Keg from './Keg';

const currentKegs = [
  {
    name: 'Luminous 04',
    maker: 'Great Notion',
    price: 5,
    percent: 6,
    fullness: 100,
  },
  {
    name: 'White Light',
    maker: 'Great Notion',
    price: 5,
    percent: 5.8,
    fullness: 80,
  },
  {
    name: 'Guava Coconut Mochi',
    maker: 'Great Notion',
    price: 5,
    percent: 7,
    fullness: 40,
  },
  {
    name: 'Puppy Love',
    maker: 'Great Notion',
    price: 6,
    percent: 5.4,
    fullness: 111,
  },
  {
    name: 'Carnival',
    maker: 'Great Notion',
    price: 7,
    percent: 9,
    fullness: 20,
  },
  {
    name: 'Double Stack',
    maker: 'Great Notion',
    price: 4,
    percent: 4,
    fullness: 57,
  },
]

function KegList(){
  return (
    <div>
      {currentKegs.map((keg, index) =>
        <Keg name={keg.name}
          maker={keg.maker}
          price={keg.price}
          percent={keg.percent}
          fullness={keg.fullness}
        />
      )}
      <style jsx>{`
        div{
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
      `}</style>
    </div>
  );
}

export default KegList;
