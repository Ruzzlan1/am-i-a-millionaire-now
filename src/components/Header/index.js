import React from 'react'

export const Header = () => {
  return (
    <header className='header is-flex is-justify-content-center is-align-items-center is-flex-direction-column'>
        <h2 className="is-size-2">Am I a Millionaire Now?</h2>
        <p className='desc-for-app'>
            Enter your net worth in USD $ and find out when you'll be a millionaire in currencies all over the world.
        </p>
    </header>
  )
}
