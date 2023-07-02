import React from "react";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/navbar";

import '../../styles/tables.css'
import UsersTableRow from "../../components/usersTableRow";

const Users = () => {
    const [data, setData] = useState([])

    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
        getTenants()
    }, []);

    const getTenants = async () => {
        const res = await fetch('https://649f0fa3245f077f3e9d4cf3.mockapi.io/Users', {
            method: 'GET',
            headers: { 'content-type': 'application/json' }
        })
        const data = await res.json()
        setData(data)
    }

    const tableHeaders = ['Id', 'Username', 'Tenant', 'role','status']





    return (
        <>
            <div className='mainContainer' id="mainTable">
                <Sidebar id="SidebarTable" />
                <div className='RightSide'>
                    <Navbar id="NavbarTable" />
                    <div className="tablediv">
                        <form>
                            <div className='input-group' id="searchBar">
                                <input type='text' className='form-control form-control-md' placeholder='Search...' />
                                <button className='btn btn-primary'>GO</button>
                            </div>
                        </form>
                        <div className='container'>
                            <h4>Users</h4>
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
                                                <UsersTableRow data={item} index={index} />
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

export default Users