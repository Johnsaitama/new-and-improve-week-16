// import React, {useState} from 'react';
// import {SiDatabricks, SiHackaday, SiV8} from 'react-icons/si'
// import {FaBars, FaTimes} from 'react-icons/fa'
// import { Link } from 'react-router-dom';
// import './NavbarStyles.css'

// const Navbar = () => {
//    const [nav, setNav] = useState(false)
//    const handleNav = () => setNav(!nav)

//     return (
//         <div name='top'className='navbar'>
//         <div className="container">
//             <div className="logo">
//                 <SiV8 className='icon' />
//                 <h1>Secured</h1>
//             </div>
// {/* the navbar menu */}
//             <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
//                 <li><Link to='/'>Home</Link></li>
//                 <li><Link to='/recovery'>Recovery</Link></li>
//                 <li><Link to='/cloud'>Cloud</Link></li>
//                 <li><Link to='/contact'>Contact</Link></li>
//                <button>Sign In</button>
//             </ul>
//             <div className="hamburger" onClick={handleNav}>
//                 {!nav ? (<FaBars className='icon'/>):(<FaTimes className='icon'/>)}
//             </div>
//         </div>
//         </div>
//     );
// };

// export default Navbar;