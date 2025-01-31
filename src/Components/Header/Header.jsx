import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css"; 
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isRegister, setIsRegister] = useState(false);

    return (
        <>
            <header className="header">
                <div className="header-top">
                    <img className="logo" src="./Logo.svg" alt="Logo" />
                </div>
                <div>
                    <NavLink to="/" className="header-link">Home</NavLink>
                    <NavLink to="/single-shop" className="header-link">Shop</NavLink>
                    <NavLink to="/plantcare" className="header-link">Plant Care</NavLink>
                    <NavLink to="/blogs" className="header-link">Blogs</NavLink>
                </div>
                <div className="header-actions">
                    <button className="icon"><img src="./Vector.svg" alt="Search" /></button>
                    <button className="icon"><img src="./Group1.svg" alt="Cart" /></button>
                    <button className="login-btn" onClick={() => setIsModalOpen(true)}>Login</button>
                </div>
            </header>

            {/* Modal */}
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <button className="close-btn" onClick={() => setIsModalOpen(false)}>✕</button>
                        <div className="modal-header">
                            <button className={!isRegister ? "active" : ""} onClick={() => setIsRegister(false)}>Login</button>
                            <button className={isRegister ? "active" : ""} onClick={() => setIsRegister(true)}>Register</button>
                        </div>
                        <form className="modal-form">
                            {isRegister && <input type="text" placeholder="Username" required />}
                            <input type="email" placeholder="Email" required />
                            <input type="password" placeholder="Password" required />
                            {isRegister && <input type="password" placeholder="Confirm Password" required />}
                            <button type="submit" className="login-submit">
                                {isRegister ? "Register" : "Login"}
                            </button>
                        </form>
                        <p className="forgot-password">Forgot Password?</p>
                        <p className="or-text">or login with</p>
                        <div className="social-login">
                            <button className="google-btn">
                                <FcGoogle style={{width: "20px", height: "20px", marginLeft: "10px"}} />
                                Login with Google
                            </button>
                            <button className="facebook-btn">
                            <FaFacebook />
                                Login with Facebook
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
