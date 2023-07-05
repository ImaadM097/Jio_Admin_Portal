import * as React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
export default function Homepage(){
    const navigate = useNavigate();
    return navigate('/login');
}