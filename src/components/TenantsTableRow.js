import React from 'react';
import '../styles/tables.css';
import { useState } from 'react';

const TenantsTableRow = ({ data, index }) => {
    let [status,SetStatus] = useState(data.status)

    function clicked(event) {

        console.log(event.target.value);
        if(event.target.value === 'active'){
            changeStatus(true)

        }
        else{
            changeStatus(false)

        }
    
      }

    const changeStatus =async (val) => {
        const res = await fetch('https://649f0fa3245f077f3e9d4cf3.mockapi.io/Tenants/'+String(data.id), {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({status: val})
        })
        const response = await res.json()
        console.log(response)
        
        SetStatus(val)
    }  


    return (
        <>
            <tr>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.domain}</td>
                <td>{
                    <div onChange={clicked}>
                        <label>Activate</label>
                        
                        <input type="radio" 
                        name={String(data.id )+ "active"}                   
                        value="active"
                        checked={status} />
                    
                        <label>Deactivate</label>

                        <input type="radio" 
                        name={String(data.id )+ "active"}
                        value="inactive"
                        checked={!status} />
                    
                    
                    </div>
                 }
                </td>

            </tr>
        </>
    );
}

export default TenantsTableRow