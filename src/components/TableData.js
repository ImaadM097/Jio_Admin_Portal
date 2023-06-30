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
                <td id='thumbnail'> 
                    <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <img src='/images/thumbnailLogo.png' width={'25'} height={'25'}></img>
                    </button>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
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