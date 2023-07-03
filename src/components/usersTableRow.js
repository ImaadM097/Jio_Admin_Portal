import React from 'react';
import '../styles/tables.css';
import { useState } from 'react';

const UsersTableRow = ({ data, index }) => {
    let [status,SetStatus] = useState(data.status)

    function clicked(event) {

        console.log(event.target.checked);
        if(event.target.checked === true){
            changeStatus(true)

        }
        else{
            changeStatus(false)

        }
    
      }

    const changeStatus =async (val) => {
        const res = await fetch('https://649f0fa3245f077f3e9d4cf3.mockapi.io/Users/'+String(data.id), {
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
                <td>{data.user_name}</td>
                <td>{data.tenant}</td>
                <td>{data.role}</td>
                
                <td>{
                    <div class="form-check form-switch">
                       <input class="form-check-input" 
                        type="checkbox" role="switch" 
                        id="flexSwitchCheckDefault"
                        checked={status}
                        onChange={clicked}/>
                    
                    </div>
                 }
                </td>

            </tr>
        </>
    );
}

export default UsersTableRow