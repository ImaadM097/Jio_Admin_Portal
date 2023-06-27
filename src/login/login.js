import React from "react";
import './login.css'
import { useNavigate } from "react-router-dom";

var database = [{
    uname: "123",
    pass: "123"
}]


function Login() {
    const navigate = useNavigate();
    function handleClick(e) {
        e.preventDefault();
        let user = {};
        user.uname = e.target.Username.value;
        user.pass = e.target.Password.value;
        console.log(user)

        const userData = database.find((db) => db.uname === user.uname);
        if (userData) {
            if (userData.pass !== user.pass) {
                console.log("wrong pwd")
            } else {
                console.log("logged in ")
                navigate("/dashboard");

            }
        }
        else {
            console.log("wrong username")
        }



    }

    return (



        <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={handleClick}>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Admin Login</h3>
                    <div className="form-group mt-3">
                        <label>Username : </label>
                        <input

                            type="text"
                            id="Username"
                            name="Username"
                        // placeholder="Username"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password : </label>
                        <input
                            type="password"

                            id="Password"
                            name="Password"
                        // placeholder="Password"
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>

                </div>
            </form>
        </div>
    )


}

export default Login;