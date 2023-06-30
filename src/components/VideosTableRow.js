import React from 'react';
import ReactPlayer from 'react-player';
import '../styles/tables.css'

const TableRow = ({data, index}) => {
    

    return (
        <>
            <tr>
                <td>{data.name}</td>
                <td>{data.tenant}</td>
                <td>{data.status}</td>
                <td>{data.duration}</td>
                <td>
                    <button className='btn btn-primary sm' data-bs-toggle="modal" data-bs-target={`#modal${index}`}>Play Video</button>
                    <div className='modal fade' id={`modal${index}`}>
                        <div className='modal-dialog modal-dialog-centered modal-lg'>
                            <div className='modal-content'>
                                <div className='modal-header'>
                                    <h2>Play Video</h2>
                                    <button className='btn-close' data-bs-dismiss="modal" data-bs-target={`#modal${index}`}></button>
                                </div>
                                <div className='modal-body' id='videoPlayer'>
                                    <ReactPlayer url={data.video} />
                                </div>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
        </>
    );
}

export default TableRow