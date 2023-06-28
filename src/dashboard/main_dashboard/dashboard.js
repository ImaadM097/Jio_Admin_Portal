
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/navbar';
import Chart1 from '../../components/Chart1';
import Chart2 from '../../components/Chart2';
import Chart3 from '../../components/Chart3';
import '../../styles/dashboard.css'


const Dashboard = () => {
    return (
        <>
            <div className='mainContainer'>
                <Sidebar id="SidebarTable" />
                <div className='RightSide'>
                    <Navbar id="NavbarTable" />
                    <div className="container" id="chartContainer">
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
    )
}

export default Dashboard;