import { useState } from 'react'
import Button from './components/Button'
import Google from './components/Google'
import Marquee from './components/Marquee'
import Avatar from './components/Avatar'
import { FaMoneyBill } from "react-icons/fa";
import profile from "./assets/profile.webp"


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

      <Google size="lg" className="green">
        <img alt="google" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/%28at%29.svg/50px-%28at%29.svg.png"/>
        Google it here
      </Google>

      <>
      <Avatar className="avatar" src={profile} alt="Bob Ziroll" />
      <br />
      <Avatar>BZ</Avatar>
      <br />
      <Avatar/>
      </>

      <div>
      {/* <Marquee text="🧛‍♀️ Welcome to Horrorville 🧛‍♀️" /> */}
      </div>
    </>
  )
}

export default App
