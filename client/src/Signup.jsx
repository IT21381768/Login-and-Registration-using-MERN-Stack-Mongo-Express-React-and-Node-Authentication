import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    
    return (
        <div>
            <h1>Register</h1>
            <div className="mb-3">
                <label htmlFor="email">
                    <strong>Name</strong>
                </label>
                <input type="text"
                    className="form-control"
                    autoComplete="off"
                    name="name"
                    placeholder="Enter your name" />
            </div>

            <div className="mb-3">
                <label htmlFor="email">
                    <strong>Email</strong>
                </label>
                <input type="email"
                    className="form-control"
                    autoComplete="off"
                    name="email"
                    placeholder="Enter your email" />
            </div>

            <div className="mb-3">
                <label htmlFor="email">
                    <strong>Password</strong>
                </label>
                <input type="password"
                    className="form-control"
                    autoComplete="off"
                    name="password"
                    placeholder="Enter your password" />
            </div>
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
