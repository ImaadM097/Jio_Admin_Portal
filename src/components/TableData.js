import React from 'react';
import '../styles/tables.css'

const TableRow = ({data, index}) => {
    

    return (
        <>
            <tr>
                <td>{data.channel_name}</td>
                <td>{data.title}</td>
                <td>
                    <button className='btn btn-primary sm' data-bs-toggle="modal" data-bs-target={`#modal${index}`}>{data.comment_count}</button>
                    <div className='modal fade' id={`modal${index}`}>
                        <div className='modal-dialog modal-dialog-centered'>
                            <div className='modal-content'>
                                <div className='modal-header'>
                                    <h2>View Comments</h2>
                                </div>
                                <div className='modal-body'>
                                    <ul>
                                    {
                                        data.comment.map((com)=>{
                                            return (
                                                <p>{com}</p>
                                            )
                                        })
                                    }
                                    </ul>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </td>
                <td>{data.inappropriate_comment_count}
                </td>
                <td><img src="" alt="thumbnail"/></td>
            </tr>
        </>
    );
}

export default TableRow