import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/navbar';
import '../../styles/tables.css'
import response from '../../sample_response/sample_response.json'
import TableRow from '../../components/TableData';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Tables = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    useEffect(() => {
        if(!token){
            navigate('/login');
        }
    }, []);
    const videos = response.data.videos;
    const totalCount = response.data.total;
    const count = (totalCount > 10) ? 10 : totalCount;
    const newVideos = videos.slice(0, count-1);



    return (
        <>
            <div className='mainContainer' id="mainTable">
                <Sidebar id="SidebarTable"/>
                <div className='RightSide'>
                    <Navbar id="NavbarTable"/>
                    <div className="tablediv">
                        <form>
                        <div className='input-group' id="searchBar">
                            <input type='text' className='form-control form-control-md' placeholder='Search...'/>
                            <button className='btn btn-primary'>GO</button>
                        </div>
                        </form>
                        <div className='container'>
                            <h4>Videos</h4>
                        </div>
                            <div className='container' id='tableContainer'>
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th>Channel</th>
                                            <th>Video Title</th>
                                            <th>Comment Count</th>
                                            <th>In-Appropriate Comment Count</th>
                                            <th>Thumbnail</th>
                                        </tr>
                                    </thead> 
                                    <tbody>
                                    {(response == null)? (
                                        <h5>No data</h5>
                                    ):(
                                        newVideos.map((item, index)=>{
                                            return (
                                                <TableRow data={item} index={index}/>
                                            )
                                        })
                                    )
                                    
                                    }
                                    </tbody>
                                </table>
                            </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Tables;