import React from "react";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/navbar";
import TableRow from "../../components/VideosTableRow";
import '../../styles/tables.css'

const Videos = () => {
    const [data, setData] = useState([])
    const [searchValue, setSearchValue] = useState("")
    const [search, setSearch] = useState(false)

    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    useEffect(() => {
        if(!token){
            navigate('/login');
        }
        getVideos().then((res)=>setData(res))
        
    }, []);

    async function getVideos() {

        const url = new URL('https://649ebb2f245f077f3e9cd0c1.mockapi.io/Videos')
        url.searchParams.append('page', 1); 
        url.searchParams.append('limit', 10);
        const res = await fetch(url, {
            method: 'GET',
            headers: {'content-type':'application/json'}
        })
        const data = await res.json()
        
        return data
    }

    const tableHeaders = ['Id' ,'Name', 'Tenant', 'Status', 'Duration', 'Video']
    
    async function handleSearch(searchTerm) {
        setSearch(true)
        let tempData = []
        if(searchTerm === "") { setSearch(false);    return }
        
        for(let i=0; i<tableHeaders.length-1; i++) {
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
                    <Navbar id="NavbarTable"/>
                    <div className="tablediv">
                        
                        <div className='input-group' id="searchBar">
                            <input type='text' className='form-control form-control-md' placeholder='Search...' onChange={(e)=>{setSearchValue(e.target.value)}} 
                            value={searchValue}/>
                            <button className='btn btn-primary' onClick={()=>{handleSearch(searchValue)}}>GO</button>
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
                                <table className='table'>
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
                                    {(data == null || data.length===0)? (
                                        <h5>No data</h5>
                                    ):(
                                        data.map((item, index)=>{
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

export default Videos