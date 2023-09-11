
export default function HeroHeader() {
    return (
        <header className="header">
            <nav className="nav-bar">
                <div className="logo-container">
                    <figure className="logo-image">
                        <img src="" alt="" />
                    </figure>
                    <h3 className="logo-text">MovieBox</h3>
                </div>

                <div className="search-input-container">
                    <input type="text"  placeholder="What do you want to watch?"/>
                    {/* a search icon here */}
                </div>

                <div className="nav-links">
                    <div className="btn-container">
                        <button className="sign-in">Sign in</button>
                    </div>
                    <div className="menu-bar"></div>
                </div>
            </nav>
        </header>
    )
}