import { Link } from "react-router-dom";
import "../styles/Menu.css";
import { useState } from "react";
const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        className="btn"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e3e3e3"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </button>
      <div className={`menu ${isOpen ? "active" : ""}`}>
        <Link className="menu-btn" to={"/services"}>
          Services
        </Link>
        <Link className="menu-btn" to={"/projects"}>
          Projects
        </Link>
        <Link className="menu-btn" to={"/contact"}>
          Contact
        </Link>
        <Link className="menu-btn" to={"/metrics"}>
          Metrics
        </Link>
        <Link className="menu-btn" to={"/testmonials"}>
          Testmonials
        </Link>
        <Link className="menu-btn" to={"/joinus"}>
          Join Us
        </Link>
      </div>
    </>
  );
};

export default Menu;
