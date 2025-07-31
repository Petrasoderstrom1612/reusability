import { useState } from 'react'
import Button from './components/Button'
import Marquee from './components/Marquee'
import { FaMoneyBill } from "react-icons/fa";


function App() {

  return (
    <>
      <Button>
        <FaMoneyBill />
        Buy now!
      </Button>
      {/* <Marquee text="🧛‍♀️ Welcome to Horrorville 🧛‍♀️" /> */}
    </>
  )
}

export default App
