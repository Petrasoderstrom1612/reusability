import React from 'react'

const Button = (props) => {
  console.log(props)
  return (
    <>
    {/* <button onClick={props.buyConsole}>{props.children}</button> */}
    <button {...props}>{props.children}</button>
    </>
  )
}

export default Button
