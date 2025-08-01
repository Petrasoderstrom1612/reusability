import React from 'react'

const Google = ({children, ...rest}) => {
  let sizing = ""

  if (rest.size === "sm") sizing = "button-small"
  if (rest.size === "lg") sizing = "button-large" 

  return (
    <>
    <button {...rest} className={sizing}>{children}</button> {/* the position of {...rest} decides whether the green class will be overriten or will override*/}
    </>
  )
}

export default Google
