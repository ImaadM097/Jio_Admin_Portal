import React from "react";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import Sidebar from "../../components/Sidebar";
// import Navbar from "../../components/navbar";
import TenantsTableRow from "../../components/TenantsTableRow";
import '../../styles/tables.css'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Alert from '@mui/material/Alert';
import CreateTenant from "../../components/CreateTenant";
import fetcher from "../../fetcher";
import Pagination from "../../components/Pagination";
const Tenants = () => {
    const tokenB = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IkltYWFkIiwiaWF0IjoxNjg5NzQwNTA0fQ.sFUdELZheDFmE_42RJF5UUQT-ZIlqhjYQBhU5t6jPP0"
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [totalCount, setTotalCount] = useState(0);
    const [currentURL, setCurrentURL] = useState('http://192.168.56.1:3001/tenants/list')    //'https://649ebb2f245f077f3e9cd0c1.mockapi.io/Tenants'

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
        getTenants()
    }, [navigate,token]);

    const getTenants = async () => {
        const url = new URL('http://192.168.56.1:3001/tenants/list');
        setCurrentURL('http://192.168.56.1:3001/tenants/list');
        

        const Alldata = await fetcher(url, 'GET', [], tokenB);
        // const AlldataRes = await fetch('http://192.168.56.1:3001/tenants/list', {
        //     method: 'GET',
        //     headers: {'content-type': 'application/json', 'authorization': tokenB}
        // })
        // const Alldata = await AlldataRes.json();
        setTotalCount(Alldata.length)
        
        const data = await fetcher(url, 'GET', [['page', 1], ['limit',rowsPerPage]], tokenB)
        // const dataRes = await fetch('http://192.168.56.1:3001/tenants/list?'+`page=${currentPage}&limit=${rowsPerPage}`, {
        //     method: 'GET',
        //     headers: {'content-type': 'application/json', 'authorization': tokenB}

        // })
        // const data = await dataRes.json();
        console.log(data)
        if(data.length === 0 || data === null){
            setAlert(true);
            setLoader(false);
        }
        else{ 
            setData(data);
            setLoader(false);
        }
        
        
    }

    const tableHeaders = [ 'Name', 'Domain', 'Features', 'Active']

    async function handleSearch(e) {
        // let tempData = []

        setSearchValue(e.target.value)
        const searchTerm = e.target.value
        
        // if(searchTerm.length === 0 ) {await getTenants()}
        if(searchTerm.length <= 2) return

        setSearch(true)
        
        setCurrentPage(1)
        const url = `http://192.168.56.1:3001/tenants/list`   //https://649ebb2f245f077f3e9cd0c1.mockapi.io/Tenants?name=${searchTerm}
        const AllTempData = await fetcher(new URL(url), 'GET', [], tokenB)          //Getting all data to get total count as mockAPI does not give total count in response
        setCurrentURL(url)
        setTotalCount(AllTempData.length)
        console.log(AllTempData)
        // console.log(tempData.length)
        const tempData = await fetcher(new URL(url), 'GET', [['search', searchTerm],['page',currentPage], ['limit', rowsPerPage]], tokenB)

        if(tempData.length === 0) setAlert(true)
        else if(tempData.length <= 10) {setData(tempData); setAlert(false)}
        else {
            const newTempData = tempData.slice(0, 10)
            setData(newTempData)
            setAlert(false)
        }
        setSearch(false)
        
    }
    async function handlePagination(type) {
        console.log(currentURL)

        if(type == 'next') {
            const data = await fetcher(new URL(currentURL), 'GET', [['page', currentPage+1],['limit',rowsPerPage]])
            if(currentPage < Math.ceil(totalCount/rowsPerPage))setCurrentPage(currentPage+1)
            setData(data)
        }
        else {
            const data = await fetcher(new URL(currentURL), 'GET', [['page', currentPage-1],['limit',rowsPerPage]])
            if(currentPage > 1)setCurrentPage(currentPage-1)
            setData(data)
        }
        // console.log(data)
        
        
    } 
    return (
        <>
            {/* <div className='mainContainer' id="mainTable">
                <Sidebar id="SidebarTable" /> */}
                <div className='RightSide'>
                    {/* <Navbar id="NavbarTable" /> */}
                    <div className="tablediv">
                        
                            <div className='input-group' id="searchBar">
                                <input type='text' className='form-control form-control-md' placeholder='Search by name..' 
                                onChange={handleSearch} />
                                {/* <button className='btn btn-primary' onClick={()=>{handleSearch(searchValue)}}>GO</button> */}
                            </div>
                            {
                            (search) ? (
                                <div className="container" ><h6 id="searchIndicator">Searching....</h6></div>
                            ) : (<></>)
                            }
                        
                        <div className='container'>
                            <h4>Tenants</h4>
                            <CreateTenant/>
                        </div>
                        <div className='container' id='tableContainer'>
                            <table className='table table-striped'>
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
                                                    <TenantsTableRow data={item} index={index}/>
                                                )
                                            })
                                        ):''
                                    }
                                </tbody>
                            </table>
                            <Pagination  totalCount={totalCount} rowsPerPage={rowsPerPage} currentPage={currentPage} pagination = {handlePagination}/>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </>
    )
}

export default Tenants


//https://649f0fa3245f077f3e9d4cf3.mockapi.io/Tenants