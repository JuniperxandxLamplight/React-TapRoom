import React from 'react';

function OrderForm(props){
  let _beer = 'Luminous 04';

  function handleNewOrderSubmission(event){
    event.preventDefault();
    props.onNewOrder(_beer.value);
    _beer = 'Luminous 04';
  }

  return(
    <div>
      <button onClick={props.onAddPint}>+</button>
      <h3>{props.pints}</h3>
      <button onClick={props.onSubtractPint}>-</button>
      <form onSubmit={(handleNewOrderSubmission)}>
        <select ref={(select) => {_beer = select;}}>
          {Object.keys(props.kegs).map((keg, i) =>
            <option value={props.kegs[keg].id} key={i}>{props.kegs[keg].name}</option>
          )}
        </select>
        <button id="submit" type='submit'>Order a Pint</button>
      </form>
      <style jsx>{`
        div{
          font-size: 2rem;
          width: 30%;
          text-align: center;
        }
        h3{
          display: inline;
          margin: 0 20px;
        }
        button{
          font-size: 1.5rem;
          padding: 5px 15px;
          background: transparent;
          border-radius: 10px;
          border: none;
          transition: border .3s, box-shadow .3s;
        }
        #submit{
          padding: 10px 20px;
        }
        button:hover{
          border: 2px solid black;
          box-shadow: 0px 3px 7px gray;
        }
        select{
          display: block;
          margin: 10px auto;
          font-size: 2.5rem;
          border: none;
          border-top-right-radius: 10px;
          border-top-left-radius: 10px;
          transition: border .3s, box-shadow .3s;
        }
        select:hover{
          border: 2px solid black;
          box-shadow: 0px 3px 7px gray;
        }
        select:focus{
          outline: none;
          border-bottom-right-radius: 0;
          border-bottom-left-radius: 0;
        }
      `}</style>
    </div>
  );
}

export default OrderForm;
