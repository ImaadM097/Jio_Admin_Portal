
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/navbar';
import Chart1 from '../../components/Chart1';
import Chart2 from '../../components/Chart2'
import Chart3 from '../../components/Chart3';
import '../../styles/dashboard.css'
import jwt_decode from "jwt-decode";
import { useEffect } from 'react';
import { redirect, useNavigate } from "react-router-dom";
const Dashboard = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
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