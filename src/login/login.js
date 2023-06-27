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

                    <svg width="75" height="75" xmlns="http://www.w3.org/2000/svg">
                        <image href="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Reliance_Jio_Logo_%28October_2015%29.svg/800px-Reliance_Jio_Logo_%28October_2015%29.svg.png" height="75" width="75" />
                    </svg>

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