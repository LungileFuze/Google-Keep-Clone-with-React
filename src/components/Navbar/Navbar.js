import "./Navbar.css"
const Navbar = () => {
    return (
        <nav>
        <div className="logo-area">
            <div className="tooltip">
                <i className="material-icons-outlined hover">menu</i>
                <span className="tooltip-text">Main menu</span>
            </div>
          
            <img className="gb_Dc gb_Dd" src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
             alt="" aria-hidden="true" role="presentation" />
             <span className="logo-text">Keep</span>
        </div>
        <div className="search-area">
            <div className="tooltip">
                <i className="material-icons-outlined hover">search</i>
                <span className="tooltip-text">Search</span>
            </div>
            <input type="text" placeholder="Search" />
        </div>
        <div className="setting-area">
            <div className="tooltip">
                <span className="material-icons-outlined hover">
                    refresh
                </span>
                <span className="tooltip-text">Refresh</span>
            </div>
            <div className="tooltip">
                <span className="material-icons-outlined hover">
                    view_agenda
                </span>
                <span className="tooltip-text">List view</span>
            </div>
            <div className="tooltip">
                <span className="material-icons-outlined hover">
                    settings
                </span>
                <span className="tooltip-text">Settings</span>
            </div>
        </div>
        <div className="profile-action-area">
            <div className="tooltip">
                <span className="material-icons-outlined hover">apps</span>
                <span className="tooltip-text">Google apps</span>
            </div>
            <div className="tooltip">
                <span className="material-icons-outlined hover">account_circle</span>
                <span className="tooltip-text">Profile</span>
            </div>
        </div>
    </nav>
    )
        
}

export default Navbar;