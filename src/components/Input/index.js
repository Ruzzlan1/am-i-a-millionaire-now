import React from 'react'
import { Button } from '../Button'
export const Input = () => {
  return (
    <div className='input-container mt-3 is-flex'>
        <input class="input is-normal" type="number" placeholder="Type your net worth,dont hide it :d"></input>
        <Button />
    </div>
  )
}
