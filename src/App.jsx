import { useState } from 'react'
import Button from './components/Button'
import Marquee from './components/Marquee'
import { FaMoneyBill } from "react-icons/fa";


function App() {

  const displayText = () => {
    console.log("buying...")
  }

  return (
    <>
      <Button buyConsole={displayText}>
        <FaMoneyBill/>
        Buy now!
      </Button>
      <div>
      {/* <Marquee text="🧛‍♀️ Welcome to Horrorville 🧛‍♀️" /> */}
      </div>
    </>
  )
}

export default App
