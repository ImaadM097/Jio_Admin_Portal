import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/navbar';
import { useNavigate } from 'react-router-dom';
import '../../styles/profile.css';
import { useEffect } from 'react';
function Profile(){
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    useEffect(() => {
        if(!token){
            navigate('/login');
        }
    }, []);
    return (
        <div className='mainProfileDiv'>
            <Sidebar/>
            <div className='profileContent'>
                <Navbar/>
                <div className="profileCard">
                    <h2>Profile</h2>
                    <img src='https://images.unsplash.com/photo-1687753980500-7fca4fdecfa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1046&q=80' height={'35%'} width={'75%'} id ='profileBack'/>
                    <h3>John Doe</h3>
                    <h4>Role</h4>
                </div>
            </div> 
        </div>
    );
}

export default Profile;