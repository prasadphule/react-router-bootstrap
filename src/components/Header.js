import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="d-flex align-items-center pb-3 mb-5 border-bottom">
            <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
                <span className="fs-4">Company Name</span>
            </a>
            <ul className="nav nav-pills ms-auto">
                <li className="nav-item">
                    <Link to="/home" className="nav-link active" aria-current="page">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about-us" className="nav-link">AboutUs</Link>
                </li>
            </ul>
        </header>
    )
}