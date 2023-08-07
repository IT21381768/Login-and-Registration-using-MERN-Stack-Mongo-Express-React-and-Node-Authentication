import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3001/login", { email, password })
            .then(result => {
                console.log(result)
                // navigate("/home")
                if(result.data === "Success"){
                navigate("/home")
                }
            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>


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
                        onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button type="submit" className="btn btn-primary">
                    Login
                </button>
            </form>
            {/* <p>Already have a account</p>
            <Link to="/login" type="submit" className="btn btn-primary">
                Login
            </Link> */}
        </div>
    )
}

export default Login