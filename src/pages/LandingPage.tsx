import Community from "../components/Community/Community";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import OurClients from "../components/OurClients/OurClients";
import './LandingPage.css'
export default function LandingPage() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <OurClients/>
      <Community/>
    </div>
  )
}
