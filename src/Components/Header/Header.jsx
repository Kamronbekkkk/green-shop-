import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {


    return (
        <>
            <header className="header">
                <div className="header-top">
                    <img className="logo" src="./Logo.svg" alt="Logo" />
                    
                </div>
                <div>
                    <NavLink to="/" className="header-link" >
                        Home
                    </NavLink>
                    <NavLink to="/single-shop" className="header-link"  >
                        Shop
                    </NavLink>
                    <NavLink to="/plantcare" className="header-link"   >
                        Plant Care
                    </NavLink>
                    <NavLink to="/blogs" className="header-link" >
                        Blogs
                    </NavLink>
                </div>

                
                <div className="header-actions">
                    <button className="icon">
                        <img src="./Vector.svg" alt="Search" />
                    </button>
                    <button className="icon">
                        <img src="./Group1.svg" alt="Cart" />
                    </button>
                    <button className="login-btn">Login</button>
                </div>
            </header>

            
        </>
    );
};

export default Header;
