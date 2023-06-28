import '../styles/container.css'
import Header from './Header'
import MenuList from './MenuList';
function Sidebar(){
    return(
        <div className="container1">
            <Header/>
            <MenuList/>
        </div>
    );
}
export default Sidebar;