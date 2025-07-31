import React from 'react'

const Button = (props) => {
  console.log(props.children)
  return (
    <>
    <button onClick={props.buyConsole}>{props.children}</button>
    </>
  )
}

export default Button
