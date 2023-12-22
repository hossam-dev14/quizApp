import './Header.css';
import { Outlet, Link } from "react-router-dom";

const Header = () => {
    return (
        <header className='p_right_left'>
            <div className="logo">
                <Link to="/">My_Logo</Link>
            </div>
            <nav className="nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Quiz">Quiz</Link></li>
                </ul>
            </nav>
            <Outlet />
        </header>
    );
}

export default Header;