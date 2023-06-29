
import Sidebar from './Sidebar/Sidebar';
import Navbar from './navbar';
import Chart1 from './Charts/Chart1';
import Chart2 from './Charts/Chart2';
import Chart3 from './Charts/Chart3';
import './dashboard.css'
import Cookies from 'universal-cookie';
import jwt_decode from "jwt-decode";
import { useEffect } from 'react';
import { redirect, useNavigate } from "react-router-dom";

let cookies = new Cookies();
const Dashboard = () => {
    const navigate = useNavigate();
    const token = cookies.get('token');
    
    useEffect(() => {
        if(!token){
            navigate('/login');
        }
    }, []);
        return (
            <>
                <div className='mainContainer'>
                    <Sidebar id="SidebarTable" />
                    <div className='RightSide'>
                        <Navbar id="NavbarTable" />
                        <div className="container">
                            <div className='row'>
                                <div className="col">
                                    <Chart2 />
                                </div>
                                <div className="col">
                                    <Chart3 />
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col">
                                    <Chart1 />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

export default Dashboard;