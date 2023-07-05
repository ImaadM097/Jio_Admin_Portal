import { useNavigate } from 'react-router-dom';
export default function Homepage(){
    const navigate = useNavigate();
    const logIn = ()=>{
        navigate('/login');
    }
    return {logIn};
}