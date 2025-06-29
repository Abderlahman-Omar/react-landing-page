import './Header.css'
import headerImg from "../../assets/Header/Illustration.svg"
export default function Header() {
  return (
    <div className='header-container'>
      <div className="text-container">
        <p className='first-text'>Lessons and Insights</p>
        <p className='second-text'>From 8 years</p>
        <button>
          Register Now
        </button>
      </div>
      <img src={headerImg} alt="" />
    </div>
  )
}
