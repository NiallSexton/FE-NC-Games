
import { Link } from 'react-router-dom';

const Header = ({user}) => {
    return <div className="Header">
    <h1 className="title">NIALLS GAMES REVIEWS</h1>
    <div className='Navbar'>
       <ul className='ul-nav'>
        <li className='li-nav'><Link to='/'>Home</Link></li>
        <li className='li-nav'><Link to='/categories'>Game Categories</Link></li>
        <li className='li-nav'><Link to='/profile'>Profile</Link></li>
       </ul>
       </div>
    </div>
}

export default Header;