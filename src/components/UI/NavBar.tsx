import {Link} from 'react-router-dom'
import '../styles/NavBar.css'
import Menu from './menu'
function NavBar() {
  return (
    <div className="navbar">
      <Menu/>
        <h1>Softify_Dev</h1>
        <div className="links">
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