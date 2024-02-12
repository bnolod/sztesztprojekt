import {} from "react"
import { useState } from "react"
import { CookiesProvider, useCookies } from "react-cookie";


export function Buttons() {
    const [cookies, setCookie] = useCookies(["user"]);

    function handleLogin(user) {
        setCookie("user", user, { path: "/" });
    }

    return (
        <CookiesProvider>
        <div className="buttons">
            
            {cookies.user
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
        </CookiesProvider>
    )
}