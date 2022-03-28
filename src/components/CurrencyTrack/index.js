import React from 'react'

export const CurrencyTrack = ({currency,budget}) => {
    const checkIfMillionaire = budget > 1000000 ? true : false
    return (
      <p className={checkIfMillionaire ? 'has-text-success' : ''}>{`Currency : ${currency} Worth: ${budget}`}</p>
  )
}
