import '../styles/header.css'
import { Link } from 'react-router-dom'



export default function Header() {
    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary" id='header-Nav'>

            <div className="container-fluid" id="logo-container">
                <Link className="navbar-brand" to="/">
                    <img src="../../public/expense-tracker-logo.png" alt="Loading..." width={80} height={80} />
                </Link>
            </div>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="menu-items-container">
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to={'/'}>HOME</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/About'}>ABOUT</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/#hash">TESTIMONIALS</Link>
                    </li>
                </ul>
            </div>

            <form className="d-flex" role="search" id="signup-container">
                <button className="btn btn-primary" type="submit" id="signup-btn">SIGN UP</button>
            </form>

        </nav>
    )
}

