import '../styles/menu.css'
import MenuLinks from './MenuLinks';
import { useNavigate } from "react-router-dom";

const list = [{name:'Dashboard',Link:'/dashboard'},{name:'Calendar',Link:'/'},{name:'Profile',Link:'/dashboard/profile'},{name:'Comments',Link:'/dashboard/comments'}, 
               {name: 'Videos', Link:'/dashboard/videos'}];
function MenuList(){
    const navigate = useNavigate();

    function handleClick(link){
        navigate(link)
    }
    return (
        <div className="menu">
            <h3 id='menuHeading'>Menu</h3>
            <ul>
                {list.map((e,i)=>{
                    return (
                        <li key={i} id='menuList'onClick={()=>handleClick(e.Link)}><MenuLinks obj = {e}/></li>
                    );
                })}
            </ul>
        </div>
    );
}

export default MenuList;