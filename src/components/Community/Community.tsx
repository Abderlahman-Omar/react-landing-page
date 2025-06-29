import "./Community.css"
import logo1 from "../../assets/Community/Icon.svg"
import logo2 from "../../assets/Community/Icon (1).svg"
import logo3 from "../../assets/Community/Icon (2).svg"
export default function Community() {
  return (
    <div className="community-container">
      <div className="community-text-container">
        <p className="community-title">Manage your entire community in a single system</p>
        <p className="community-quote">Who is Nextcent suitable for?</p>
      </div>
      <div className="community-logo-section">
        <div className="community-logo-card">
          <img src={logo1} alt="" />
          <p className="community-card-title">Membership Organisations</p>
          <p className="community-card-quote">Our membership management software provides full automation of membership renewals and payments</p>
        </div>
        <div className="community-logo-card">
          <img src={logo2} alt="" />
          <p className="community-card-title">National Associations</p>
          <p className="community-card-quote">Our membership management software provides full automation of membership renewals and payments</p>
        </div>
        <div className="community-logo-card">
          <img src={logo3} alt="" />
          <p className="community-card-title">Clubs And Groups</p>
          <p className="community-card-quote">Our membership management software provides full automation of membership renewals and payments</p>
        </div>
      </div>
    </div>
  )
}
