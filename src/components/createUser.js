import React from "react";
import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import fetcher from "../fetcher";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import '../styles/createUser.css'

const CreateUser = ()=>{
    const token = localStorage.getItem('token')
    const [formName, setFormName] = useState("");
    const [formTenant, setFormTenant] = useState("");
    const [role,Setrole] = useState("");
    // const [formData,setFormData] = useState({
    //     user_name:"",
    //     tenant:"",
    //     status:true,
        
    // });
    // const [success,setsuccess] = useState(false);

    const handleChange = (e)=>{
        // const changedField = e.target.name;
        // const newVal = e.target.value;
        // setFormData(currData=>{
        //     return {...currData,
        //     [changedField]:newVal,
        //     };
        // });
        if(e.target.id === 'filled-requiredName') setFormName(e.target.value)
        else setFormTenant(e.target.value)
    }
    const handleRoleChange=(e)=>{
        if(e.target.value ==="admin"){
            Setrole("admin")
        }
        else{
            Setrole("moderator")
        }
        
    }
    

    const handleClick =  async (e)=>{
        e.preventDefault();

        const newData = {
            name: formName,
            tenant: formTenant,
            active: true,
            role: role
        }

        // // const res = await fetch('https://649f0fa3245f077f3e9d4cf3.mockapi.io/Users/', {
        // //     method: 'POST',
        // //     headers: { 'content-type': 'application/json' },
        // //     body: JSON.stringify(newdata)
        // // })
        // // const response = await res.json()
        const response = await fetcher(new URL('http://192.168.56.1:3001/users/create'), 'POST', [], token,newData)       //'https://649f0fa3245f077f3e9d4cf3.mockapi.io/Users/'
        console.log(response)
        // setsuccess(true)
        setFormName(""); setFormTenant("");
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
                                {/* <form onSubmit={handleClick}>
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
                                </form> */}
                                <div id="boxBody">
                                    <Box
                                        component="form"
                                        sx={{
                                            '& .MuiTextField-root': { m: 1, width: '20ch' },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                        onSubmit={handleClick}
                                        >
                                            <TextField
                                            required
                                            id="filled-requiredName"
                                            label="Name"
                                            defaultValue=""
                                            variant="filled"
                                            onChange={handleChange}
                                            value={formName}
                                            />
                                            {/* <TextField
                                            required
                                            id="filled-requiredTenant"
                                            label="Tenant"
                                            defaultValue=""
                                            variant="filled"
                                            onChange={handleChange}
                                            value={formTenant}
                                            /> */}
                                            <FormControl variant="filled" sx={{ m: 1, minWidth: 120,width:'20ch' }}>
                                                    <InputLabel id="demo-simple-select-label">Tenant</InputLabel>
                                                    <Select
                                                    required
                                                    labelId="demo-simple-select-filled-label"
                                                    id="demo-simple-select-filled"
                                                    value={formTenant}
                                                    label="Tenant"
                                                    onChange={handleChange}
                                                    >
                                                    <MenuItem value={"Morissette Group"}>Morissette Group</MenuItem>
                                                    <MenuItem value={"Hintz Inc"}>Hintz Inc</MenuItem>
                                                    <MenuItem value={"Auer - Terry"}>Auer - Terry</MenuItem>
                                                    </Select>
                                            </FormControl>
                                            <h5 id="roleHeading">Role:</h5>
                                            <RadioGroup
                                                aria-labelledby="demo-radio-buttons-group-label"
                                                defaultValue="moderator"
                                                name="radio-buttons-group"
                                                onChange={handleRoleChange}
                                            >
                                                <FormControlLabel id ="roleGroup" value="admin" control={<Radio id="admin"/>} label="admin" />
                                                <FormControlLabel id ="roleGroup" value="moderator" control={<Radio id="mod"/>} label="moderator" />
                                            </RadioGroup>
                                    </Box>
                                    </div>
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

