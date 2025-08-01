import React from 'react'

const Google = ({children, ...rest}) => {
  //let sizing = "" otherwise place instead of rest.size. This could be used if classNames differ
  // if (rest.size === "sm") sizing = "sm"
  // if (rest.size === "lg") sizing = "lg" 


  return (
    <>                {/*you can do rest.size or add size after children as destructured in arguments and then just size in this component without . */}
    <button {...rest} className={`${rest.size} ${rest.className}`}>{children}</button> {/* the position of {...rest} decides whether the green class will be overriten or will override*/}
    </>
  )
}

export default Google
