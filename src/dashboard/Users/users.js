import React from "react";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import Sidebar from "../../components/Sidebar";
// import Navbar from "../../components/navbar";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Alert from '@mui/material/Alert';
import '../../styles/tables.css'
import UsersTableRow from "../../components/usersTableRow";
import CreateUser from "../../components/createUser";
import fetcher from "../../fetcher";


const Users = () => {
    const [data, setData] = useState([])
    const [searchValue, setSearchValue] = useState("")
    console.log(searchValue);
    const [search, setSearch] = useState(false)
    const [alert,setAlert] = useState(false);
    const [loader,setLoader] = useState(true);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
        getUsers()
    }, [navigate,token]);

    const getUsers = async () => {
        const url = new URL('https://649f0fa3245f077f3e9d4cf3.mockapi.io/Users')
        
        const data = await fetcher(url, 'GET', [['page', 1], ['limit', 10]])
        if(data.length === 0 || data === null){
            setAlert(true);
            setLoader(false);
        }
        else{ 
            setData(data);
            setLoader(false);
        }
    }

    const tableHeaders = ['Id', 'Username', 'Tenant', 'Role','Active']

    async function handleSearch(e) {

        setSearchValue(e.target.value)
        const searchTerm = e.target.value
        setSearch(true)
        let tempData = []
        if(searchTerm.length <= 2) {  setSearch(false);    return }
        
        for(let i=1; i<tableHeaders.length-1; i++) {
            const url = new URL('https://649f0fa3245f077f3e9d4cf3.mockapi.io/Users')
            let header = tableHeaders[i].toLowerCase()
            if(header === 'username') header = 'user_name'
            const searchResult = await fetcher(url, 'GET', [[header, searchTerm], ['page', 1], ['limit', 10]])
            tempData = tempData.concat(searchResult)
        }
        
        if(tempData.length <= 10) setData(tempData)
        else {
            const newTempData = tempData.slice(0, 10)
            setData(newTempData)
        }
        setSearch(false)
    }



    return (
        <>
            {/* <div className='mainContainer' id="mainTable">
                <Sidebar id="SidebarTable" /> */}
                <div className='RightSide'>
                    {/* <Navbar id="NavbarTable" /> */}
                    <div className="tablediv">
                        
                            <div className='input-group' id="searchBar">
                                <input type='text' className='form-control form-control-md' placeholder='Search by username, tenant, role...' 
                                onChange={handleSearch} />
                                {/* <button className='btn btn-primary' onClick={()=>{handleSearch(searchValue)}}>GO</button> */}
                            </div>
                            {
                            (search) ? (
                                <div className="container" ><h6 id="searchIndicator">Searching....</h6></div>
                            ) : (<></>)
                            }
                        
                        <div className='container'>
                            <h4>Users</h4>
                            <CreateUser/>
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
                                {loader && <Box sx={{ width: '100%' }}>
                                            <LinearProgress />
                                        </Box>}
                                        {
                                            alert && <Alert severity="warning">No data found!!</Alert>
                                        }
                                    {
                                        (!alert && !loader)?(
                                            data.map((item, index)=>{
                                                return (
                                                    <UsersTableRow data={item} index={index}/>
                                                )
                                            })
                                        ):''
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </>
    )
}

export default Users