const Navbar = ({setCategory}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">News</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <div className="nav-link" onClick={()=> setCategory("Technology")}>Technology</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={() => setCategory("Business")}>Business</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={()=> setCategory("Health")}>Health</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={() => setCategory("Sports")}>Sports</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={() => setCategory("entertainment")}>Entertainment</div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;  