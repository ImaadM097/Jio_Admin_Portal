import React from 'react';
import '../styles/tables.css'

const TableRow = ({data, index}) => {
    

    return (
        <>
            <tr>
                <td>{data.name}</td>
                <td>{data.tenant}</td>
                <td>{data.status}</td>
                <td>{data.duration}</td>
                <td>{data.video}</td>
            </tr>
        </>
    );
}

export default TableRow