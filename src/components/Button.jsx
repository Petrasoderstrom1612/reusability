import React from 'react'

const Button = ({buyConsole, children}) => {
  return (
    <>
    <button onClick={buyConsole}>{children}</button>
    </>
  )
}

export default Button
