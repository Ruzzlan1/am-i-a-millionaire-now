import { React, useContext } from "react";
// import CurrencyContext from '../../containers/CurrencyTrackPage'
export const CurrencyTrack = ({ currency, budget }) => {
  const checkIfMillionaire = budget > 1000000 ? true : false;
  const nf = new Intl.NumberFormat('en-US')
  
  return (
    <div className="currency-container">
      <p className="has-text-weight-bold is-size-5" >
        {`Currency : ${currency} - Worth :`} 
        <span className ={`${checkIfMillionaire ? "has-text-success" : ""}`}> {nf.format(budget)}
        </span>
      </p>
    </div>
  );
};
