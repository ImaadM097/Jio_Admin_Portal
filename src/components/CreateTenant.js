import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateTenant = ()=>{
    const navigate = useNavigate();
    const [formData,setFormData] = useState({
        name:"",
        status:true,
        domain:""
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

    const handleClick =  async (e)=>{
        e.preventDefault();
        console.log(formData);

        const res = await fetch('https://649f0fa3245f077f3e9d4cf3.mockapi.io/Tenants/', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(formData)
        })
        const response = await res.json()
        console.log(response)
        setsuccess(true)
        setFormData({
            name:"",
            status:true,
            domain:""
        })
        navigate('/dashboard/tenants');
        

    }

    return(
        <>
        
                    <button className='btn  btn-outline-secondary float-end mb-4' data-bs-toggle="modal" data-bs-target="#modal123" >
                        Add Tenant
                        {/* <img alt=""src='/images/download.png' width={'45'} height={'25'}></img> */}
                    </button>
                    <div className='modal fade' id="modal123">
                        <div className='modal-dialog modal-dialog-centered modal-lg'>
                            <div className='modal-content text-center'>
                                <div className='modal-header'>
                                    <h3>Add Tenant</h3>
                                    <button className='btn-close' data-bs-dismiss="modal" data-bs-target="#modal123"></button>
                                </div>
                                <div className="modal-body">
                                

                                
                                <form onSubmit={handleClick}>
                                    
                                        
                                        
                                        <div className="form-group mt-3">
                                            <label>Name : </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                onChange={handleChange}
                                                value={formData.username}
                                            
                                            />
                                        </div>
                                        <div className="form-group mt-3">
                                            <label>Domain : </label>
                                            <input
                                                type="text"
                                                id="domain"
                                                name="domain"
                                                onChange={handleChange}
                                                value={formData.domain}
                                            
                                            />
                                            
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

export default CreateTenant;

