import * as React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
export default function Homepage(){
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate('/login');
    }
    return (
        <div className='homeDiv'>
            <h1>Jio Stream</h1>
            <Button onClick={handleClick} variant="contained">Login</Button>
        </div>
    );
}