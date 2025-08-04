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
      <br />

      <Google>Log in with Google</Google>
      <Google size="lg" variant="success">Log in with Google</Google>
      <Google size="sm" variant="warning">Log in with Google</Google>
      <Google size="sm" variant="danger">Log in with Google</Google>
      <br />

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
