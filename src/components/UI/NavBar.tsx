import {Link} from 'react-router-dom'
import '../styles/NavBar.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Menu from './Menu'
gsap.registerPlugin(useGSAP);
function NavBar() {
  useGSAP(()=>{
    gsap.from(".navbar",{
      y:-80,
      duration:1
    })
  })
  return (
    <div className="navbar">
      <Menu/>
        <h1>Softify_Dev</h1>
        <div className="links">
          <Link className='navbtn' to={"/"}>Home</Link>
          <Link className='navbtn' to={"/services"}>Services</Link>
          <Link className='navbtn' to={"/projects"}>Projects</Link>
          <Link className='navbtn' to={"/contact"}>Contact</Link>
          <Link className='navbtn' to={"/metrics"}>Metrics</Link>
          <Link className='navbtn' to={"/testmonials"}>Testmonials</Link>
          <Link className='navbtn' to={"/joinus"}>Join Us</Link>
        </div>
        <Link className='primary-btn' to={"desc"}>Get Started</Link>
    </div>
  )
}

export default NavBar