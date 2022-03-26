import React from 'react'
import { Button } from '../Button'
export const Input = () => {
  return (
    <form className='field form-container mt-3 is-flex'>
        <input className="input is-normal" type="number" placeholder="Type your net worth,dont hide it :d"></input>
        <Button />
    </form>
  )
}
