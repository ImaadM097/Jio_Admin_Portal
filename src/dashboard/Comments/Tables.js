// import Sidebar from '../../components/Sidebar';
// import Navbar from '../../components/navbar';
import '../../styles/tables.css'
import response from '../../sample_response/sample_response.json'
import TableRow from '../../components/TableData';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Pagination from '../../components/Pagination';

const Tables = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;
    const totalCount = response.data.videos.length;     //For actual api call replace with response.data.total
    const [data, setData] = useState([])

    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const allComments = response.data.videos;
    useEffect(() => {
        if(!token){
            navigate('/login');
        }
        setData(allComments.slice(0,10))
    }, [navigate,token,allComments]);
    
    console.log(allComments)
    
    async function handlePagination(type) {
        if(type === 'next' && currentPage < Math.ceil(totalCount/rowsPerPage)) setCurrentPage(currentPage+1); 
        else if(currentPage > 1) setCurrentPage(currentPage-1);

        const indexOfLastRow = currentPage*rowsPerPage;
        const indexOfFirstRow = indexOfLastRow - rowsPerPage;
        const newData = allComments.slice(indexOfFirstRow, indexOfLastRow)
        setData(newData)
        
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
                            <input type='text' className='form-control form-control-md' placeholder='Search...'/>
                            <button className='btn btn-primary'>GO</button>
                        </div>
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
                                    {(response == null)? (
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
                                <Pagination totalCount={totalCount} rowsPerPage={rowsPerPage} currentPage={currentPage} pagination = {handlePagination}/>
                            </div>
                    </div>
                </div>
            {/* </div> */}
            
        </>
    )
}

export default Tables;