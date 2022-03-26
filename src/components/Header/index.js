import React from 'react'
import money from "../../assets/images/money.png" 
export const Header = () => {
  return (
    <header className='header'>
        <div className="is-flex is-align-items-center">
        <h2 className="is-size-2 has-text-weight-bold">Am I a Millionaire Now?</h2>
        <img  src={money} className="image is-48x48 ml-4" alt="dollar image" />
        </div>

        <p className='desc-for-app is-size-5'>
            Enter your net worth in USD $ and find out when you'll be a millionaire in currencies all over the world.
        </p>
    </header>
  )
}
