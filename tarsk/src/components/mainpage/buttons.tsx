import {} from "react"
import { useState } from "react"



export function Buttons() {
    const [loggedIn, setloggedIn] = useState(1)

    return (
        <div className="buttons">
            
            {loggedIn==1 ? <button className="button">Start swiping</button> : <div><button id="login">Login</button> <button id="register">Register</button></div>}
        </div>
    )
}