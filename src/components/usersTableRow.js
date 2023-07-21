import React from 'react';
import '../styles/tables.css';
import { useState } from 'react';
import fetcher from '../fetcher';

const UsersTableRow = ({ data, index }) => {
    let [status,SetStatus] = useState(data.active)
    const token = localStorage.getItem('token');

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
        const response = await fetcher(new URL(`http://192.168.56.1:3001/users/update/${data._id}`),'PUT',[], token,{active: val})
        console.log(response)
        
        SetStatus(val)
    }  


    return (
        <>
            <tr>
                {/* <td>{data.id}</td> */}
                <td>{data.name}</td>
                <td>{data.tenant}</td>
                <td>{data.role}</td>
                
                <td>{
                    <div class="form-check form-switch" id='activeContainerUser'>
                       <input class="form-check-input"  
                        type="checkbox" role="switch" 
                        id="activeUser"
                        checked={status}
                        onChange={clicked}
                        />
                    
                    </div>
                 }
                </td>

            </tr>
        </>
    );
}

export default UsersTableRow