import React from "react";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/navbar";
import TenantsTableRow from "../../components/TenantsTableRow";
import '../../styles/tables.css'

const Tenants = () => {
    const [data, setData] = useState([])
    const [searchValue, setSearchValue] = useState("")

    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
        getTenants()
    }, []);

    const getTenants = async () => {
        const url = new URL('https://649f0fa3245f077f3e9d4cf3.mockapi.io/Tenants')
        

        url.searchParams.append('page', 1); 
        url.searchParams.append('limit', 10);

        const res = await fetch(url, {
            method: 'GET',
            headers: { 'content-type': 'application/json' }
        })
        const data = await res.json()
        setData(data)
    }

    const tableHeaders = ['Id', 'Name', 'Domain', 'status']

    async function handleSearch(searchTerm) {
        let tempData = []

        if(searchTerm === "") return
        
        for(let i=0; i<tableHeaders.length-1; i++) {
            const url = new URL('https://649f0fa3245f077f3e9d4cf3.mockapi.io/Tenants')
            const header = tableHeaders[i].toLowerCase()
            url.searchParams.append(header, searchTerm)
            url.searchParams.append('page', 1); 
            url.searchParams.append('limit', 10);
            const res = await fetch(url, {method: 'GET', headers: {'content-type': 'application/json'}})
            const searchResult = await res.json()
            tempData = tempData.concat(searchResult)
        }
        if(tempData.length <= 10) setData(tempData)
        else {
            const newTempData = tempData.slice(0, 10)
            setData(newTempData)
        }
    }



    return (
        <>
            <div className='mainContainer' id="mainTable">
                <Sidebar id="SidebarTable" />
                <div className='RightSide'>
                    <Navbar id="NavbarTable" />
                    <div className="tablediv">
                        
                            <div className='input-group' id="searchBar">
                                <input type='text' className='form-control form-control-md' placeholder='Search...' 
                                onChange={(e)=>{setSearchValue(e.target.value)}} />
                                <button className='btn btn-primary' onClick={()=>{handleSearch(searchValue)}}>GO</button>
                            </div>
                        
                        <div className='container'>
                            <h4>Tenants</h4>
                        </div>
                        <div className='container' id='tableContainer'>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        {
                                            tableHeaders.map((header) => {
                                                return (
                                                    <th>{header}</th>
                                                )
                                            })
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    {(data == null) ? (
                                        <h5>No data</h5>
                                    ) : (
                                        data.map((item, index) => {
                                            return (
                                                <TenantsTableRow data={item} index={index} />
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

export default Tenants