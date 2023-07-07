import Sidebar from '../../components/Sidebar';
import { useNavigate } from 'react-router-dom';
import '../../styles/profile.css';
import { useEffect } from 'react';
function Profile(){
    const navigate = useNavigate();
    
    const usr = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');
    useEffect(() => {
        if(!token){
            navigate('/login');
        }
    }, [navigate,token]);
    return (
        <div className='mainProfileDiv'>
            <Sidebar/>
            <div className='profileContent'>
                <div className="profileCard">
                    <h2>Profile</h2>
                    <img alt="" src='https://images.unsplash.com/photo-1687753980500-7fca4fdecfa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1046&q=80' height={'35%'} width={'75%'} id ='profileBack'/>
                    <h3>{usr.firstName} {usr.lastName}</h3>
                    <h4>Role</h4>
                </div>
            </div> 
        </div>
    );
}

export default Profile;