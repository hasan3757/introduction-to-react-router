import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <span>My website</span>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>Contact</Link>
                <Link to='/contact'>Contact</Link>
                <Link to="/posts">Posts</Link>
                <Link to='/users'>Users</Link>
            </nav>
        </div>
    );
};

export default Header;