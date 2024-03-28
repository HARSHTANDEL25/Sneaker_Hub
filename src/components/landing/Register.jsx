import React, { useState ,useEffect} from "react"
import { useNavigate } from "react-router-dom";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  


export default function Register({heading,link}) {  
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [redirect,setRedirect] = useState(false)
    const navigate = useNavigate();

    async function delayedNavigate() {
        await sleep(2000);        
        navigate('/')
    }

    const register = async (evt) =>{
        evt.preventDefault();
        const response = await fetch(`${link}/register`, {
            method: 'POST',
            body: JSON.stringify({username,email,password}),
            headers: {'Content-Type':'application/json'}
        })
        if(response.status === 200){
            setEmail('')
            setPassword('')
            setUsername('')
            setRedirect(true)
        }
        else{
            alert('registration failed try again')
        }
     

    }

    if(redirect){
        delayedNavigate()
    }

    return (
        <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={register}>
            <div className="Auth-form-content">
            <h3 className="Auth-form-title">{heading}</h3>
            <div className="text-center">
                Already registered?{" "}
                <span className="link-primary" onClick={() => 
                            navigate(`/login`)}>
                Sign In
                </span>
            </div>
            <div className="form-group mt-3">
                <label>Full Name</label>
                <input
                type="text"
                className="form-control mt-1"
                placeholder="e.g Jane Doe"
                value={username}
                onChange={(evt) => setUsername(evt.target.value)}
                required
                />
            </div>
            <div className="form-group mt-3">
                <label>Email address</label>
                <input
                type="email"
                className="form-control mt-1"
                placeholder="Email Address"
                value={email}
                onChange={(evt) => setEmail(evt.target.value)}
                required
                />
            </div>
            <div className="form-group mt-3">
                <label>Password</label>
                <input
                type="password"
                className="form-control mt-1"
                placeholder="Password"
                value={password}
                onChange={(evt) => setPassword(evt.target.value)}
                required
                />
            </div>
            <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                Submit
                </button>
            </div>
            {/* <p className="text-center mt-2">
                Forgot <a href="#">password?</a>
            </p> */}
            </div>
        </form>
        </div>
    )
}