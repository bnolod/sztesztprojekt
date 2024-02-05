import {} from "react"
import "./index.scss"
import {Description} from "./description"
import { NavBar } from "../navbar"

export function MainPage() {
  return (
    <div className="mainpage">
      <NavBar/>
      <Description/>
    </div>
  )
}