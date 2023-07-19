import React from 'react';
import '../styles/tables.css';
import { useState, useEffect } from 'react';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import fetcher from '../fetcher';
//{ features : {'volumeControlEnabled': temp[0], 'productDrawerEnabled': temp[1], 'reportEnabled': temp[2], 'likeEnabled': temp[3]}

const TenantsTableRow =  ({ data, index }) => {
    const [volumeControlEnabled, setVolumeControlEnabled] = useState(data.features.volumeControlEnabled);
    const [productDrawerEnabled, setProductDrawerEnabled] = useState(data.features.productDrawerEnabled);
    const [reportEnabled, setReportEnabled] = useState(data.features.reportEnabled);
    const [likeEnabled, setLikeEnabled] = useState(data.features.likeEnabled);
    const [active, setActive] = useState(data.active);

    useEffect ( ()=>{
        setVolumeControlEnabled(data.features.volumeControlEnabled);
        setProductDrawerEnabled(data.features.productDrawerEnabled);
        setReportEnabled(data.features.reportEnabled);
        setLikeEnabled(data.features.likeEnabled);
        setActive(data.active)
     } ,[data.features.volumeControlEnabled, data.features.productDrawerEnabled, data.features.reportEnabled, data.features.likeEnabled,data.active])

    async function handleChange(e) {
        const temp = [volumeControlEnabled, productDrawerEnabled, reportEnabled, likeEnabled, active];
        // console.log(e.target.id)
        if(e.target.id === 'volumeControlEnabled') temp[0] = !temp[0]
        else if(e.target.id === 'productDrawerEnabled') temp[1] = !temp[1];
        else if(e.target.id === 'reportEnabled') temp[2] = !temp[2]
        else if(e.target.id === 'activeTenant') temp[4] = !temp[4];
        else temp[3] = !temp[3]
        
        if(e.target.id !== 'activeTenant') {
            
            const response = await fetcher(`https://649ebb2f245f077f3e9cd0c1.mockapi.io/Tenants/${data.id}`,
                'PUT',
                [],
                {features : {'volumeControlEnabled': temp[0], 'productDrawerEnabled': temp[1], 'reportEnabled': temp[2], 'likeEnabled': temp[3]}}
            )

            console.log(response)
            setVolumeControlEnabled(temp[0]); setProductDrawerEnabled(temp[1]); setReportEnabled(temp[2]); setLikeEnabled(temp[3]);
        }
        else {
            const response = await fetcher(`https://649ebb2f245f077f3e9cd0c1.mockapi.io/Tenants/${data.id}`,
                'PUT',
                [],
                {active : temp[4]}
            )
            // console.log(response)
            setActive(temp[4]);
            // console.log(active)
        }
        
        
    }


    return (
        <>
            <tr>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.domain}</td>
                <td>
                    <button className='btn' data-bs-toggle="modal" data-bs-target={`#modal${data.id}`} id="featuresButton">
                        Features
                    </button>
                    <div className='modal fade' id={`modal${data.id}`}>
                        <div className='modal-dialog modal-dialog-centered'>
                            <div className='modal-content'>
                                <div className='modal-header' id="modalHeader">
                                    <h2>Enable/Disable Features</h2>
                                    <button className='btn-close btn-close-white' data-bs-dismiss="modal" data-bs-target={`#modal${data.id}`}></button>
                                </div>
                                <div className='modal-body' id='features'>

                                <FormGroup>
                                            <FormControlLabel id="featureButtons" control={<Switch id="volumeControlEnabled" checked = {volumeControlEnabled} onChange={handleChange} />} label="Volume Drawer" />
                                            <FormControlLabel id="featureButtons" control={<Switch id="productDrawerEnabled" checked = {productDrawerEnabled} onChange={handleChange}/>} label="Product Drawer" />
                                            <FormControlLabel id="featureButtons" control={<Switch id="reportEnabled" checked = {reportEnabled} onChange={handleChange}/>} label="Report Enabled" />
                                            <FormControlLabel id="featureButtons" control={<Switch id="likeEnabled" checked = {likeEnabled} onChange={handleChange}/>} label="Like Enabled" />
                                            </FormGroup>
                                </div>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                <div class="form-check form-switch" id='activeContainerTenant'>
                    <input class="form-check-input" type="checkbox" role="switch" id="activeTenant" checked = {active} onChange={handleChange}/>
                </div>
                </td>
            </tr>
        </>
    );
}

export default TenantsTableRow