import heroLogo from "../assets/hero-logo.png"
import menuBarIcon from "../assets/Menu.png"
import searchIcon from "../assets/search-icon.png"


export default function HeroHeader() {
    return (
        <header className="header">
            <nav className="nav-bar">
                {/* page logo */}
                <div className="logo-container">
                    <figure className="logo-image">
                        <img src={heroLogo} alt="" />
                    </figure>
                    <h3 className="logo-text">MovieBox</h3>
                </div>

                {/* search box */}
                <div className="search-input-container">
                    <input type="text"  placeholder="Search movies"/>
                    <img src={searchIcon} alt="" />
                </div>

                {/* buttons */}
                <div className="nav-links">
                    <div className="btn-container">
                        <button className="sign-in">Sign in</button>
                    </div>
                    <figure className="menu-bar">
                        <img src={menuBarIcon} alt="" />
                    </figure>
                </div>
            </nav>
        </header>
    )
}