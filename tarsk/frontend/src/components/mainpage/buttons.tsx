import {} from "react"
import { useState } from "react"



export function Buttons() {
    const [loggedIn, setloggedIn] = useState(1)

    return (
        <div className="buttons">
            
            {loggedIn==1
                ?
             <div>
                <button className="button" id="swipe">Start swiping</button>
                <br />
                <button className="button" id="logout">Log Out</button>
             </div>
                :
              
              <div>
                <button id="login">Login</button>
                <br />
                <button id="register">Register</button>
                </div>}
        </div>
    )
}