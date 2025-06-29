import "./Navbar.css"
import Logo from "../../assets/Navbar/Logo.svg"
export default function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <img src={Logo} alt="" />
        <div className="nav-buttons">
          <p className="nav-element">Home</p>
          <p className="nav-element">Features</p>
          <p className="nav-element">Community</p>
          <p className="nav-element">Blog</p>
          <p className="nav-element">Pricing</p>
          <button>
            Register Now
          </button>
        </div>
      </div>
    </>
  )
}
