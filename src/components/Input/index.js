import { React, useContext } from "react";
import { CurrencyContext, useContext } from "../../helpers/context";


export const Input = ({ getCurrencyRate }) => {
  //* Get data from currency context
  const { amount, setAmount } = useContext(CurrencyContext);
  function handleChange(event) {
    setAmount(event.target.value);
  }

  return (
    <form
      className="field form-container mt-3 is-flex"
      onSubmit={getCurrencyRate}
    >
      <input
        className="input is-normal"
        type="number"
        placeholder="Type your net worth,dont hide it :d"
        value={amount}
        name="amount"
        onChange={handleChange}
      ></input>
    </form>
  );
};
