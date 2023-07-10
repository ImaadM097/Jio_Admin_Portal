import React from "react";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import fetcher from "../fetcher";

import '../styles/createUser.css'

const CreateUser = ()=>{
    const [role,Setrole] = useState("");
    const [formData,setFormData] = useState({
        user_name:"",
        tenant:"",
        status:true,
        
    });
    const [success,setsuccess] = useState(false);

    const handleChange = (e)=>{
        const changedField = e.target.name;
        const newVal = e.target.value;
        setFormData(currData=>{
            return {...currData,
            [changedField]:newVal,
            };
        });
    }
    const handleroleChange=(e)=>{
        if(e.target.id ==="flexRadioDefault1"){
            Setrole("admin")
        }
        else{
            Setrole("moderator")
        }
        
    }
    

    const handleClick =  async (e)=>{
        e.preventDefault();

        
        
        let newdata = {...formData,role:role}
        console.log(newdata);

        // const res = await fetch('https://649f0fa3245f077f3e9d4cf3.mockapi.io/Users/', {
        //     method: 'POST',
        //     headers: { 'content-type': 'application/json' },
        //     body: JSON.stringify(newdata)
        // })
        // const response = await res.json()
        const response = await fetcher(new URL('https://649f0fa3245f077f3e9d4cf3.mockapi.io/Users/'), 'POST', [], newdata)
        console.log(response)
        setsuccess(true)
    }

    return(
        <>
        
                    <button className='btn  btn-outline-secondary float-end mb-4' data-bs-toggle="modal" data-bs-target="#modal123" >
                        Add User
                        {/* <img alt=""src='/images/download.png' width={'45'} height={'25'}></img> */}
                    </button>
                    <div className='modal fade' id="modal123">
                        <div className='modal-dialog modal-dialog-centered '>
                            <div className='modal-content text-center' id = 'createUserMainBody'>
                                <div className='modal-header'id='modalHeader'>
                                    <h3>Add User</h3>
                                    <button className='btn-close btn-close-white' data-bs-dismiss="modal" data-bs-target="#modal123"></button>
                                </div>
                                <div className="modal-body" id = 'userFormBody'>
                                <form onSubmit={handleClick}>
                                        <div className="form-group mt-1" id="formUsername">
                                            <label htmlFor="user_name">UserName : </label>
                                            <input
                                                type="text"
                                                id="user_name"
                                                name="user_name"
                                                onChange={handleChange}
                                                value={formData.user_name} 
                                            />
                                        </div>
                                        <div className="form-group mt-1" id='usernameInp'>
                                            <label htmlFor="tenant">Tenant : </label>
                                            <input
                                                type="text"
                                                id="tenant"
                                                name="tenant"
                                                onChange={handleChange}
                                                value={formData.tenant}
                                            />                                            
                                        </div>
                                        <div className="form-group mt-1" onClick={handleroleChange}>
                                            <div className="m-2">
                                                {"Admin : "}
                                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                </div>                                           
                                                {"Moderator : "} 
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                                        </div>
                                        {success && <p style={{color:'green'}}>Created</p>} 
                                </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary" onClick={handleClick}>Create</button>
                                </div>
                            </div>
                        </div>
                    </div>
        </>
    )
}

export default CreateUser;

