import {} from "react"
import "./index.scss"
import { Description } from "./description"
import { NavBar } from "../navbar"
import { Buttons } from "./buttons"

export function MainPage() {
  return (
    <div className="mainpage">
      <NavBar/>
      <div className="maincontent">
        
        <Description/>
        <Buttons/>
      </div>
      
    </div>
  )
}