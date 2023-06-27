import './Styles/container.css'
import Header from './Components/Header';
import MenuList from './Components/MenuList';
function Sidebar(){
    return(
        <div className="container1">
            <Header/>
            <MenuList/>
        </div>
    );
}
export default Sidebar;