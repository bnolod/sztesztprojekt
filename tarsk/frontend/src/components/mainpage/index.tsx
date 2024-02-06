import {} from "react"
import "./index.scss"
import { Description } from "./description"
import { NavBar } from "../navbar"
import { Buttons } from "./buttons"
import { RegisterScreen } from "../profile/profile"
import { LoginScreen } from "../profile/profile"

export function MainPage() {
  return (
    <div className="mainpage">
      <RegisterScreen/>
      {/* <LoginScreen/> */}
      <NavBar/>
      <div className="maincontent">
        
        <Description/>
        <Buttons/>
      </div>
      
    </div>
  )
}