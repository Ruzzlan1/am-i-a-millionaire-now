import {React, useState,useContext} from 'react'
import { Button } from '../Button'

export const Input = ({amount,setAmount,getCurrencyRate}) => {
   function handleChange(event) {
    setAmount(event.target.value)
  }

  return (
    <form className='field form-container mt-3 is-flex' onSubmit={getCurrencyRate}>
        <input 
        className="input is-normal" 
        type="number" 
        placeholder="Type your net worth,dont hide it :d"
        value={amount}
        name="amount"
        onChange={handleChange}
        ></input>
        <Button />
    </form>
  )
}
