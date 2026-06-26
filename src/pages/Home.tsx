import NavBar from "../components/UI/NavBar";
import { Link } from "react-router-dom";
import "./styles/Home.css";
import services_data from "../data/services";
import media_data from "../data/services_media";
import Card from "../components/UI/Card";
import Card_media from "../components/UI/Card_media";

function Home() {
  return (
    <>
      <NavBar />
      <div className="hero">
        <div className="left">
          <p className="slogan">
            Next-Gen Software Solution
          </p>
          <h1 className="grad-text">
            Elevating Digital Experiences
          </h1>
          <p>
            We build high performance, future-proof digital
            products that bridge the gap between imagination
            and reality
          </p>
          <div className="btns">
            <Link className="primary-btn" to={"/services"}>
              Explore services
            </Link>
            <Link
              className="primary-btn sec"
              to={"/contact"}
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="right">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/015/278/693/small/soft-gradient-abstract-background-in-purple-blue-and-pink-colors-for-banner-and-landing-page-background-vector.jpg"
            alt="Technology"
          />
        </div>
      </div>
      <div className="section">
        <p className="slogan">Our Expertise</p>
        <h1 className="grad-text">
          Comprehensive Digital suite
        </h1>
        <div className="cards">
          {services_data.map((data, index) => (
            <Card
              key={index}
              title={data.title}
              desc={data.desc}
            />
          ))}
        </div>
      </div>
      <div className="section">
        <p className="slogan">Creative Suite</p>
        <h1 className="grad-text">Beyond Coding</h1>
        <p className="margintop">
          Innovative solutions to help your business scale
        </p>
        <div className="media-cards">
          {media_data.map((data, index) => {
            return (
              <Card_media
                key={index}
                image={data.URL}
                title={data.title}
                desc={data.desc}
              />
            );
          })}
        </div>
      </div>
      <div className="section prove">
        
      </div>
    </>
  );
}

export default Home;
