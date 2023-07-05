
import { useNavigate } from 'react-router-dom';
export default function Homepage(){
    const navigate = useNavigate();
    return navigate('/login');
}