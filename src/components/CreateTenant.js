import React from "react";
import { useState } from "react";
import '../styles/createTenant.css'
const CreateTenant = ()=>{
    const [formData,setFormData] = useState({
        name:"",
        active:true,
        domain:"",
        
    });
    const [volumeControlEnabled, setVolumeControlEnabled] = useState(false);
    const [productDrawerEnabled, setProductDrawerEnabled] = useState(false);
    const [reportEnabled, setReportEnabled] = useState(false);
    const [likeEnabled, setLikeEnabled] = useState(false);
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
    const handleFeatureChange = (e)=>{
        const temp = [volumeControlEnabled, productDrawerEnabled, reportEnabled, likeEnabled];
        
        if(e.target.id === 'volumeControlEnabled') temp[0] = !temp[0]
        else if(e.target.id === 'productDrawerEnabled') temp[1] = !temp[1];
        else if(e.target.id ==='reportEnabled') temp[2] = !temp[2]
        else temp[3] = !temp[3]
        

        setVolumeControlEnabled(temp[0]); setProductDrawerEnabled(temp[1]); setReportEnabled(temp[2]); setLikeEnabled(temp[3]);
        
        
    }


    const handleClick =  async (e)=>{
        e.preventDefault();
        
        const newdata = {
            ...formData,features:{volumeControlEnabled:volumeControlEnabled, productDrawerEnabled:productDrawerEnabled, reportEnabled:reportEnabled, likeEnabled:likeEnabled}
        }
        console.log(JSON.stringify(newdata))
        const res = await fetch('https://649ebb2f245f077f3e9cd0c1.mockapi.io/Tenants/', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newdata)
        })
        const response = await res.json()
        console.log(response)
        setsuccess(true)
        setFormData({
            name:"",
            active:true,
            domain:"",
        })
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
                                <form onSubmit={handleClick}>
                                        <div className="form-group mt-3">
                                            <label>Name : </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                onChange={handleChange}
                                                value={formData.name}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Domain : </label>
                                            <input
                                                type="text"
                                                id="domain"
                                                name="domain"
                                                onChange={handleChange}
                                                value={formData.domain}
                                            
                                            />
                                            
                                        </div>

                                        <h3>Features:</h3>

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
                                        {success && <p style={{color:'green'}}>Created</p>}
                                        
                                       
                                    
                                </form>
                                


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

