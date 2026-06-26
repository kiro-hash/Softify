
import '../styles/Footer.css'
import services from '../../data/services'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">


        <div className="footer-section">
          <h2 className="logo">Softify_dev</h2>
          <p>
            We build modern websites, mobile apps, and digital solutions.
          </p>
        </div>

        {/* Navigation */}
        <div className="footer-section">
          <h3>Navigation</h3>
          <Link className='navbtn' to={"/services"}>Services</Link>
          <Link className='navbtn' to={"/projects"}>Projects</Link>
          <Link className='navbtn' to={"/contact"}>Contact</Link>
          <Link className='navbtn' to={"/metrics"}>Metrics</Link>
          <Link className='navbtn' to={"/testmonials"}>Testmonials</Link>
        </div>
        <div className="footer-section services-list">
          <h3>Services</h3>

          {services.map((service, index) => (
            <a href="#" key={index}>{service.title}</a>
          ))}

        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>
          <a href="mailto:your@email.com">Email</a>
          <a href="https://wa.me/201234567890" target="_blank">WhatsApp</a>
          <a href="#">Location</a>
        </div>

        {/* Social */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
        </div>
        <div className="footer-section join">
          <h3>Join Us</h3>
          <p>Be part of Softify_dev and start your journey with us.</p>
                    <Link className='navbtn' to={"/joinus"}>Join Now</Link>
        </div>
      </div>

      <div className="copyright">
        © {new Date().getFullYear()} Softify_dev. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer



