// import Sidebar from '../../components/Sidebar';
// import Navbar from '../../components/navbar';
import '../../styles/tables.css'
import response from '../../sample_response/sample_response.json'
import TableRow from '../../components/TableData';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useCallback } from "react";
import Pagination from '../../components/Pagination';
import fetcher from '../../fetcher';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Alert from '@mui/material/Alert';

const Tables = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;
    const [totalCount, setTotalCount] = useState(0);
    const [currentURL, setCurrentURL] = useState('http://192.168.56.1:3001/comments/list') 

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
        getComments()
    }, [navigate,token]);

    const getComments = useCallback(async ()=> {
        const url = 'http://192.168.56.1:3001/comments/list'
        setCurrentURL('http://192.168.56.1:3001/comments/list')    

        const Alldata = await fetcher(new URL(url), 'GET', [], token)
        setTotalCount(Alldata.length)
        setCurrentPage(1)
        
        const data = await fetcher(new URL(url), 'GET', [['page', 1], ['limit', 10]], token)
        console.log(data)
        if(data.length === 0 || data === null){
            setAlert(true);
            setLoader(false);
        }
        else{ 
            setData(data);
            setLoader(false);
        }
    })
    
    // console.log(allComments)
    
    async function handlePagination(type) {
        // if(type === 'next' && currentPage < Math.ceil(totalCount/rowsPerPage)) setCurrentPage(currentPage+1); 
        // else if(currentPage > 1) setCurrentPage(currentPage-1);

        // const indexOfLastRow = currentPage*rowsPerPage;
        // const indexOfFirstRow = indexOfLastRow - rowsPerPage;
        // const newData = allComments.slice(indexOfFirstRow, indexOfLastRow)
        // setData(newData)
        if(type === 'next') {
            const data = await fetcher(new URL(currentURL), 'GET', [['page', currentPage+1],['limit',rowsPerPage]],token)
            if(currentPage < Math.ceil(totalCount/rowsPerPage))setCurrentPage(currentPage+1)
            setData(data)
        }
        else {
            const data = await fetcher(new URL(currentURL), 'GET', [['page', currentPage-1],['limit',rowsPerPage]],token)
            if(currentPage > 1)setCurrentPage(currentPage-1)
            setData(data)
        }
        
    }
    async function handleSearch(e) {

        setSearchValue(e.target.value)
        const searchTerm = e.target.value
        setSearch(true)
        if(searchTerm.length <= 2) { setSearch(false);    return }
        

        setCurrentPage(1)
        const queryURL =  `http://192.168.56.1:3001/comments/list?search=${searchTerm}`                                  //`https://649ebb2f245f077f3e9cd0c1.mockapi.io/Videos?name=${searchTerm}`
        const AllTempData = await fetcher(new URL(queryURL), 'GET', [],token)
        setCurrentURL(queryURL)
        setTotalCount(AllTempData.length)
        const tempData = await fetcher(new URL(queryURL), 'GET', [['page',currentPage], ['limit', rowsPerPage]],token)  

        if(tempData.length === 0) setAlert(true)
        else {
            setData(tempData)
            setAlert(false)
        }
        setSearch(false)
    }

    return (
        <>
            {/* <div className='mainContainer'> */}
                {/* <Sidebar/> */}
                <div className='RightSide'>
                    {/* <Navbar id="NavbarTable"/> */}
                    <div className="tablediv">
                        <form>
                        <div className='input-group' id="searchBar">
                            <input type='text' className='form-control form-control-md' placeholder='Search...' onChange={handleSearch} 
                            value={searchValue}/>
                            {/* <button className='btn btn-primary'>GO</button> */}
                        </div>
                        {
                            (search) ? (
                                <div className="container" ><h6 id="searchIndicator">Searching....</h6></div>
                            ) : (<></>)
                        }
                        </form>
                        <div className='container'>
                            <h4>Comments</h4>
                        </div>
                            <div className='container' id='tableContainer'>
                                <table className='table table-striped'>
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
                                <Pagination totalCount={totalCount} rowsPerPage={rowsPerPage} currentPage={currentPage} pagination = {handlePagination}/>
                            </div>
                    </div>
                </div>
            {/* </div> */}
            
        </>
    )
}

export default Tables;