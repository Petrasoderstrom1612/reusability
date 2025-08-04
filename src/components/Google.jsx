import React from 'react'

const Google = ({children, ...rest}) => {
  let sizing = "" 
  if (rest.size === "sm") sizing = "sm"
  if (rest.size === "lg") sizing = "lg" 

  let variantClass = rest.variant && `button-${rest.variant}`

  return (
    <>                {/*you can do rest.size or add literally size in props and then just size in this component without . */}
    <button {...rest} className={`${rest.size} ${variantClass}`}>{children}</button> {/* the position of {...rest} decides whether the green class will be overriten or will override*/}
    </>
  )
}

export default Google
