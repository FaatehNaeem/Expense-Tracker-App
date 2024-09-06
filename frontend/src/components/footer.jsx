import '../styles/footer.css'

export default function Footer() {
    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary" id='footer-nav'>

            <div className="container-fluid flex-column" id="icon-container">
                <h5 style={{ color: "#E2F3E4" }}>FOLLOW ME ON</h5>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row justify-content-center align-items-center">
                    <li className="nav-item social">
                        <a className="nav-link-footer" aria-current="page" href="#">
                            <img src="../../public/linkedin.png" alt="" width={40} height={40} />
                        </a>
                    </li>
                    <li className="nav-item social">
                        <a className="nav-link-footer" href="#">
                            <img src="../../public/github.png" alt="" width={40} height={40} />
                        </a>
                    </li>
                    <li className="nav-item social">
                        <a className="nav-link-footer" href="#">
                            <img src="../../public/instagram.png" alt="" width={40} height={40} />

                        </a>
                    </li>
                </ul>
            </div>

            <div className="container-fluid" id="logo-container2">
                <a className="navbar-brand" href="#">
                    <img src="../../public/expense-tracker-logo.png" alt="Loading..." width={280} height={280} />
                </a>
            </div>

            <div className="container-fluid" id='footer-menu-container'>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="menu-container3">
                    <li className="nav-item footer-menu-items">
                        <a className="nav-link" aria-current="page" href="#" style={{ marginLeft: '20px' }}>HOME</a>
                    </li>
                    <li className="nav-item footer-menu-items">
                        <a className="nav-link" href="#">ABOUT</a>
                    </li>
                    <li className="nav-item footer-menu-items">
                        <a className="nav-link" href="#">TESTIMONIALS</a>
                    </li>
                </ul>
            </div>

        </nav>

    )
}

