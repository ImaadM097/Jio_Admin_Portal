import React from "react";
import './login.css'

function Login() {
    function handleClick(e) {
        e.preventDefault();
        let user = {};
        user.uname = e.target.Username.value;
        user.pass = e.target.Password.value;
        console.log(user)

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