import '../styles/header.css';
function Header(){
    return (
        <>
            <div className="header">
                <svg width="75" height="75" xmlns="http://www.w3.org/2000/svg">
                    <image href="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Reliance_Jio_Logo_%28October_2015%29.svg/800px-Reliance_Jio_Logo_%28October_2015%29.svg.png" height="75" width="75" />
                </svg>
                <h1>JioStream</h1>
            </div>
        </>
    );
}

export default Header;