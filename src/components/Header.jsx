const Header = () => {
    return (
        <>
        {/* --------- #HEADER-----------  */}
            <header className="header" data-header="">
                <div className="container">
                    <a href="#">
                        <h1 className="logo">Sumit Prajapati</h1>
                    </a>
                    <button
                        className="nav-toggle-btn"
                        aria-label="Toggle Menu"
                        data-nav-toggle-btn=""
                    >
                        <ion-icon name="menu-outline" className="menu-icon" />
                        <ion-icon name="close-outline" className="close-icon" />
                    </button>
                    <nav className="navbar container">
                        <ul className="navbar-list">
                            <li>
                                <a href="#home" className="navbar-link" data-nav-link="">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="navbar-link" data-nav-link="">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#portfolio" className="navbar-link" data-nav-link="">
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a href="#skills" className="navbar-link" data-nav-link="">
                                    Skills
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="navbar-link" data-nav-link="">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="https://drive.google.com/file/d/1dwqW_jB_yKg6yFl3cj9-DyvtTLi6q3EO/view?usp=drive_link" target='_blank' className="btn btn-primary">
                                    Download CV
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header