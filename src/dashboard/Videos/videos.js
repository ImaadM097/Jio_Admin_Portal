import React from "react";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Sidebar from "../../components/Sidebar";
// import Navbar from "../../components/navbar";
import TableRow from "../../components/VideosTableRow";
import '../../styles/tables.css'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Alert from '@mui/material/Alert';

const Videos = () => {
    const [data, setData] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [search, setSearch] = useState(false);
    const [alert,setAlert] = useState(false);
    const [loader,setLoader] = useState(true);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    useEffect(() => {
        if(!token){
            navigate('/login');
        }
        getVideos()
        
    }, [navigate,token]);

    async function getVideos() {

        const url = new URL('https://649ebb2f245f077f3e9cd0c1.mockapi.io/Videos')
        url.searchParams.append('page', 1); 
        url.searchParams.append('limit', 10);
        const res = await fetch(url, {
            method: 'GET',
            headers: {'content-type':'application/json'}
        })
        const data = await res.json()
        if(data.length === 0 || data === null){
            setAlert(true);
            setLoader(false);
        }
        else{ 
            setData(data);
            setLoader(false);
        }
    }

    const tableHeaders = ['Id' ,'Name', 'Tenant', 'Status', 'Duration', 'Video']
    
    async function handleSearch(e) {

        setSearchValue(e.target.value)
        const searchTerm = e.target.value
        setSearch(true)
        let tempData = []
        if(searchTerm.length <= 2) {  await getVideos(); setSearch(false);    return }
        
        for(let i=0; i<tableHeaders.length-3; i++) {
            const url = new URL('https://649ebb2f245f077f3e9cd0c1.mockapi.io/Videos')
            const header = tableHeaders[i].toLowerCase()
            // console.log(header)
            url.searchParams.append(header, searchTerm)
            url.searchParams.append('page', 1); 
            url.searchParams.append('limit', 10);
            const res = await fetch(url, {method: 'GET', headers: {'content-type': 'application/json'}})
            const searchResult = await res.json()
            // console.log(searchResult)
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
            <div className='mainContainer' id="mainTable">
                <Sidebar id="SidebarTable"/>
                <div className='RightSide'>
                    {/* <Navbar id="NavbarTable"/> */}
                    <div className="tablediv">
                        <div className='input-group' id="searchBar">
                            <input type='text' className='form-control form-control-md' placeholder='Search by name or tenant...' onChange={handleSearch} 
                            value={searchValue}/>
                            {/* <button className='btn btn-primary' onClick={()=>{handleSearch(searchValue)}}>GO</button> */}
                        </div>
                        {
                            (search) ? (
                                <div className="container" ><h6 id="searchIndicator">Searching....</h6></div>
                            ) : (<></>)
                        }
                       
                        <div className='container'>
                            <h4>Videos</h4>
                        </div>
                            <div className='container' id='tableContainer'>
                                <table className='table' id='dataTables'>
                                    <thead>
                                        <tr>
                                            {
                                                tableHeaders.map((header)=>{
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
                                                    <TableRow data={item} index={index}/>
                                                )
                                            })
                                        ):''
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

export default Videos