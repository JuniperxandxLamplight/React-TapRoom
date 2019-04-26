import React from 'react';

function OrderForm(props){
  let _beer = 'Luminous 04';

  function handleNewOrderSubmission(event){
    event.preventDefault();
    props.onNewOrder(_beer.value);
    _beer = 'Luminous 04';
  }

  return(
    <form onSubmit={(handleNewOrderSubmission)}>
      <select ref={(select) => {_beer = select;}}>
        {Object.keys(props.kegs).map((keg, i) =>
          <option value={props.kegs[keg].id} key={i}>{props.kegs[keg].name}</option>
        )}
      </select>
      <button type='submit'>Order a Pint</button>
    </form>
  );
}

export default OrderForm;
