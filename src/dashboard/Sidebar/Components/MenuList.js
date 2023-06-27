import '../Styles/menu.css'
import MenuLinks from './MenuLinks';
const list = [{name:'Dashboard',Link:'/'},{name:'Calendar',Link:'/'},{name:'Profile',Link:'/'},{name:'Tables',Link:'/'}];
function MenuList(){
    function handleClick(link){

    }
    return (
        <div className="menu">
            <h3 id='menuHeading'>Menu</h3>
            <ul>
                {list.map(e=>{
                    return (
                        <li id='menuList'onClick={()=>handleClick(e.Link)}><MenuLinks obj = {e}/></li>
                    );
                })}
            </ul>
        </div>
    );
}

export default MenuList;