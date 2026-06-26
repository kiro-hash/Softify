import NavBar from "../components/UI/NavBar";
import { Link } from "react-router-dom";
import "./styles/Home.css";
function Home() {
  return (
    <>
      <NavBar />
      <div className="hero">
        <div className="left">
          <p className="slogan">
            Next-Gen Software Solution
          </p>
          <h1>Elevating Digital Experiences</h1>
          <p>
            We build high performance, future-proof digital
            products that bridge the gap between imagination
            and reality
          </p>
          <div className="btns">
            <Link className="primary-btn" to={"/services"}>Explore services</Link>
            <Link className="primary-btn sec" to={"/contact"}>Contact Us</Link>
          </div>
        </div>
        <div className="right">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/015/278/693/small/soft-gradient-abstract-background-in-purple-blue-and-pink-colors-for-banner-and-landing-page-background-vector.jpg"
            alt="Technology"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
