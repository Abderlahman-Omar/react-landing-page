import "./Navbar.css";
import Logo from "../../assets/Navbar/Logo.svg";
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="navbar-container">
        <img src={Logo} alt="" />
        <div className={`nav-buttons ${isOpen ? "active" : ""}`}>
          <p className="nav-element">Home</p>
          <p className="nav-element">Features</p>
          <p className="nav-element">Community</p>
          <p className="nav-element">Blog</p>
          <p className="nav-element">Pricing</p>
          <button>
            Register Now
          </button>
        </div>
        <div className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </>
  )
}