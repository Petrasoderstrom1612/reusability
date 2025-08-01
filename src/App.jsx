import { useState } from 'react'
import Button from './components/Button'
import Marquee from './components/Marquee'
import { FaMoneyBill } from "react-icons/fa";


function App() {

  // const displayText = () => {
  //   console.log("buying...")
  // }

  return (
    <>
      {/* <Button buyConsole={displayText}> */}
      <Button style={{backgroundColor: "pink"}} onClick={(() => {console.log("buying...")})}>
        <FaMoneyBill/>
        Buy now!
      </Button>
      <Button>
        <img alt="google" src="https://images.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"/>
        Google it here
      </Button>
      <div>
      {/* <Marquee text="🧛‍♀️ Welcome to Horrorville 🧛‍♀️" /> */}
      </div>
    </>
  )
}

export default App
