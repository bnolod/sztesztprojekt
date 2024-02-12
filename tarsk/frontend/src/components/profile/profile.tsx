import {useState} from "react"




export function RegisterScreen() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [email, setEmail] = useState("")
    const [data, setData] = useState({})

function Register(event: any) {
    event.preventDefault()
    console.log(JSON.stringify(data))
    
    setData({ "username":username, "password":password, "email":email });
    console.log(JSON.stringify(data))

    fetch("http://localhost:8081/register/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    console.log(username, password, confirmPassword, email)
}
 return (
    <div className="overlay">
        <form onSubmit={e=>{Register(e)}}>
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" onChange={e=> setUsername(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={e=> setPassword(e.target.value)} />
            </div>
            <div>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" onChange={e=> setConfirmPassword(e.target.value)} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={e=> setEmail(e.target.value)} />
            </div>
            <div>

                <button type="submit">Register</button>
            </div>
        </form>

    </div>   )
}

export function LoginScreen() {
    return (
        <div className="overlay">
            <form action="">
                <div>
                    <label htmlFor="username">Email</label>
                    <input type="text" id="Email" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" />
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>

        </div>
    )
    }