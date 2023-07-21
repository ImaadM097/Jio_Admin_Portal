import React from "react";
import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';

import '../styles/createTenant.css'
import fetcher from "../fetcher";
const CreateTenant = ()=>{
    // const [formData,setFormData] = useState({
    //     name:"",
    //     active:true,
    //     domain:"",
        
    // });
    const token = localStorage.getItem('token')
    const [formName, setFormName] = useState("");
    const [formDomain, setFormDomain] = useState("");
    // const [active, setActive] = useState(false)
    const [volumeControlEnabled, setVolumeControlEnabled] = useState(false);
    const [productDrawerEnabled, setProductDrawerEnabled] = useState(false);
    const [reportEnabled, setReportEnabled] = useState(false);
    const [likeEnabled, setLikeEnabled] = useState(false);
    const [success,setsuccess] = useState(false);
    console.log(success)
    const handleChange = (e)=>{
        // const changedField = e.target.name;
        // const newVal = e.target.value;
        
        // setFormData(currData=>{
        //     return {...currData,
        //     [changedField]:newVal,
        //     };
        // });
        if(e.target.id === 'filled-requiredName') setFormName(e.target.value)
        else setFormDomain(e.target.value)

    }
    const handleFeatureChange = (e)=>{
        const temp = [volumeControlEnabled, productDrawerEnabled, reportEnabled, likeEnabled];
        
        if(e.target.id === 'volumeControlEnabled') temp[0] = !temp[0]
        else if(e.target.id === 'productDrawerEnabled') temp[1] = !temp[1];
        else if(e.target.id ==='reportEnabled') temp[2] = !temp[2]
        else if(e.target.id === 'likeEnabled') temp[3] = !temp[3]
        setVolumeControlEnabled(temp[0]); setProductDrawerEnabled(temp[1]); setReportEnabled(temp[2]); setLikeEnabled(temp[3]);
    }


    const handleClick =  async (e)=>{
        e.preventDefault();
        
        const newdata = {
            name : formName,
            domain: formDomain,
            active: true,
            features: {
                volumeControlEnabled: volumeControlEnabled,
                productDrawerEnabled: productDrawerEnabled,
                reportEnabled: reportEnabled,
                likeEnabled: likeEnabled
            }

        }
        // console.log(JSON.stringify(newdata))
        // // const res = await fetch('https://649ebb2f245f077f3e9cd0c1.mockapi.io/Tenants/', {
        // //     method: 'POST',
        // //     headers: { 'content-type': 'application/json' },
        // //     body: JSON.stringify(newdata)
        // // })
        // // const response = await res.json()
        
        const response = await fetcher(new URL(`http://192.168.56.1:3001/tenants/create`), 'POST', [], token,newdata)   //'https://649ebb2f245f077f3e9cd0c1.mockapi.io/Tenants/'
        console.log(response)
        // setsuccess(true)
        setFormDomain(""); setFormName("");
        setVolumeControlEnabled(false); setProductDrawerEnabled(false); setReportEnabled(false); setLikeEnabled(false);
    }

    return(
        <>
                    <button className='btn  btn-outline-secondary float-end mb-4' data-bs-toggle="modal" data-bs-target="#modal123" >
                        Add Tenant
                        {/* <img alt=""src='/images/download.png' width={'45'} height={'25'}></img> */}
                    </button>
                    <div className='modal fade' id="modal123">
                        <div className='modal-dialog modal-dialog-centered'>
                            <div className='modal-content text-center' id = 'mainTenantBody'>
                                <div className='modal-header' id="modalHeader">
                                    <h3>Add Tenant</h3>
                                    <button className='btn-close btn-close-white' data-bs-dismiss="modal" data-bs-target="#modal123" onClick={()=>{setsuccess(false)}}></button>
                                </div>
                                <div className="modal-body" id="tenantFormBody">
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
                                            <TextField
                                            required
                                            id="filled-requiredDomain"
                                            label="Domain"
                                            defaultValue=""
                                            variant="filled"
                                            onChange={handleChange}
                                            value={formDomain}
                                            />
                                            <FormGroup>
                                            <h5 id="featureHeading">Features:</h5>
                                            <FormControlLabel id="featureButtons" control={<Switch id="volumeControlEnabled" checked = {volumeControlEnabled} onChange={handleFeatureChange} />} label="Volume Drawer" />
                                            <FormControlLabel id="featureButtons" control={<Switch id="productDrawerEnabled" checked = {productDrawerEnabled} onChange={handleFeatureChange}/>} label="Product Drawer" />
                                            <FormControlLabel id="featureButtons" control={<Switch id="reportEnabled" checked = {reportEnabled} onChange={handleFeatureChange}/>} label="Report Enabled" />
                                            <FormControlLabel id="featureButtons" control={<Switch id="likeEnabled" checked = {likeEnabled} onChange={handleFeatureChange}/>} label="Like Enabled" />
                                            </FormGroup>
                                    </Box>

                                        {/* <div className="form-group mt-3" id="tenantCol">
                                            <label>Name : </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                onChange={handleChange}
                                                value={formData.name}
                                            />
                                        </div>
                                        <div className="form-group" id = "tenantCol">
                                            <label>Domain : </label>
                                            <input
                                                type="text"
                                                id="domain"
                                                name="domain"
                                                onChange={handleChange}
                                                value={formData.domain}
                                            />
                                        </div> */}
                                    </div>
                                        {/* <h3>Features:</h3>
                                        <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" name="" role="switch" id="volumeControlEnabled" checked = {volumeControlEnabled} onChange={handleFeatureChange}/>
                                        <h7>Volume Drawer</h7>
                                        </div>
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" role="switch" id="productDrawerEnabled" checked = {productDrawerEnabled} onChange={handleFeatureChange}/>
                                            <h7>Product Drawer</h7>
                                        </div>
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" role="switch" id="reportEnabled" checked = {reportEnabled} onChange={handleFeatureChange}/>
                                            <h7>Report Enabled</h7>
                                        </div>
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" role="switch" id="likeEnabled" checked = {likeEnabled} onChange={handleFeatureChange}/>
                                            <h7>Like Enabled</h7>
                                        </div>
                                        {success && <p style={{color:'green'}}>Created</p>} */}
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>{setsuccess(false)}}>Close</button>
                                    <button type="button" className="btn btn-primary" onClick={handleClick}>Create</button>
                                </div>
                            </div>
                        </div>
                    </div>
        
        
        
        </>
    )
}

export default CreateTenant;

