import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Signup() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3001/register", {name, email, password})
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }


    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="email">
                    <strong>Name</strong>
                </label>
                <input type="text"
                    className="form-control rounded-0"
                    autoComplete="off"
                    name="name"
                    placeholder="Enter your name" 
                    onChange={(e) => setName(e.target.value)}/>
            </div>

            <div className="mb-3">
                <label htmlFor="email">
                    <strong>Email</strong>
                </label>
                <input type="email"
                    className="form-control"
                    autoComplete="off"
                    name="email"
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="mb-3">
                <label htmlFor="email">
                    <strong>Password</strong>
                </label>
                <input type="password"
                    className="form-control"
                    autoComplete="off"
                    name="password"
                    placeholder="Enter your password" 
                    onChange={(e) => setPassword(e.target.value)}/>
            </div>
            </form>
            <button type="submit" className="btn btn-primary">
                Register
            </button>
            <p>Already have a account</p>
            <Link to="/login" type="submit" className="btn btn-primary">
                Login
            </Link>
        </div>
        
    )
}

export default Signup
