
export default function HeroHeader() {
    return (
        <header className="header">
            <nav className="nav-bar">
                {/* page logo */}
                <div className="logo-container">
                    <figure className="logo-image">
                        <img src="../public/hero-logo.png" alt="" />
                    </figure>
                    <h3 className="logo-text">MovieBox</h3>
                </div>

                {/* search box */}
                <div className="search-input-container">
                    <input type="text"  placeholder="Search movies"/>
                    <img src="../public/search-icon.png" alt="" />
                </div>

                {/* buttons */}
                <div className="nav-links">
                    <div className="btn-container">
                        <button className="sign-in">Sign in</button>
                    </div>
                    <figure className="menu-bar">
                        <img src="../public/Menu.png" alt="" />
                    </figure>
                </div>
            </nav>
        </header>
    )
}