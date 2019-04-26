import React from 'react';

function OrderForm(props){
  return(
    <form>
      <select>
        {Object.keys(props.kegs).map((keg, i) =>
          <option key={i}>{props.kegs[keg].name}</option>
        )}
      </select>
      <button type='submit'>Order a Pint</button>
    </form>
  );
}

export default OrderForm;
