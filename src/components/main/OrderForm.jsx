import React from 'react';

function OrderForm(props){
  let _beer = 'orig1';


  function updatePrice(beer){
    const price = props.pints * props.kegs[beer].price;
    return price;
  }

  function handleNewOrderSubmission(event){
    event.preventDefault();
    const price = updatePrice(_beer.value);
    props.onNewOrder(_beer.value, price);
    _beer = 'orig1';
  }

  return(
    <div>
      <form onSubmit={(handleNewOrderSubmission)}>
        <select ref={(select) => {_beer = select;}}>
          {Object.keys(props.kegs).map((keg, i) =>
            <option value={props.kegs[keg].id} key={i}>{props.kegs[keg].name}</option>
          )}
        </select>
        <div className="btn" onClick={props.onSubtractPint}>-</div>
        <h3>{props.pints}</h3>
        <div className="btn" onClick={props.onAddPint}>+</div>
        <p>${updatePrice(_beer)}</p>
        <button id="submit" type='submit'>Order</button>
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
        p{
          font-weight: 500;
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
          border: 2px solid maroon;
          box-shadow: 0px 3px 7px gray;
        }
        .btn{
          display: inline;
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
        select{
          display: block;
          margin: 10px auto;
          font-size: 2.5rem;
          border: none;
          background-color: transparent;
          border-top-right-radius: 10px;
          border-top-left-radius: 10px;
          transition: border .3s, box-shadow .3s;
        }
        select:hover{
          border: 2px solid maroon;
          box-shadow: 0px 3px 7px gray;
        }
        select:focus, button:focus{
          outline: none;
        }
      `}</style>
    </div>
  );
}

export default OrderForm;
