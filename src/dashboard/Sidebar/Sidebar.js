import './Styles/container.css'
import Header from './Components/Header';
import MenuList from './Components/MenuList';
function Sidebar(){
    return(
        <aside className="container1">
            <Header/>
            <MenuList/>
        </aside>
    );
}
export default Sidebar;