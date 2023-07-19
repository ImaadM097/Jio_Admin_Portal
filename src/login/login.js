import React, { useState } from "react";
import './login.css'
import { useNavigate } from "react-router-dom";

import logo from '../src_images/JioLiv@2x.png';
const CryptoJS = require("crypto-js");

function Login() {
    const navigate = useNavigate();
    const [validPass,setValidPass] = useState(true);
    const [formData,setFormData] = useState({
        username:"",
        password:""
    });
    const handleClick =  async (e)=>{
        e.preventDefault();
        const encrypted = CryptoJS.AES.encrypt(formData.password, 'abdfut3rt598dhfn').toString();
        const res = await fetch('http://192.168.56.1:3001/login', {                             //'https://dummyjson.com/auth/login'
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
            userName: formData.username,
            password: encrypted,
            role: 'superAdmin'
            })
        })
        console.log(res);
        if(res.status == 200){
            const data = await res.json();
            console.log(data)
            localStorage.setItem('token',data.token);   
            localStorage.setItem('user',JSON.stringify(data));
            setValidPass(true);
            navigate('/dashboard');
        }else{
            setFormData({
                username:"",
                password:""
            })
            setValidPass(false);
            console.log(res)
        }
        
    }
    const handleChange = (e)=>{
        const changedField = e.target.name;
        const newVal = e.target.value;
        setFormData(currData=>{
            return {...currData,
            [changedField]:newVal,
            };
        });
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
                            name="username"
                            onChange={handleChange}
                            value={formData.username}
                        // placeholder="Username"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password : </label>
                        <input
                            type="password"
                            id="Password"
                            name="password"
                            onChange={handleChange}
                            value={formData.password}
                        // placeholder="Password"
                        />
                        {!validPass && <p style={{color:'red'}}>Invalid username or password</p>}
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