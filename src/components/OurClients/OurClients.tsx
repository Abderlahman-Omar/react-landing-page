import "./OurClients.css"
import logo1 from "../../assets/Our-Clients/Logo (1).svg"
import logo2 from "../../assets/Our-Clients/Logo (2).svg"
import logo3 from "../../assets/Our-Clients/Logo (3).svg"
import logo4 from "../../assets/Our-Clients/Logo (4).svg"
export default function OurClients() {
  return (
    <div className='clients-container'>
      <div className="clients-text-container">
        <p className="clients-title">Our Clients</p>
        <p className="clients-quote">we have been working with more than 500 clients</p>
      </div>
      <div className="clients-logo-section">
        <img src={logo1} width={'50px'} alt="" />
        <img src={logo2} width={'50px'} alt="" />
        <img src={logo3} width={'50px'} alt="" />
        <img src={logo4} width={'50px'} alt="" />
        <img src={logo1} width={'50px'} alt="" />
        <img src={logo2} width={'50px'} alt="" />
      </div>
    </div>
  )
}
