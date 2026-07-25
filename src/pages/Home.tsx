import NavBar from "../components/UI/NavBar";
import { Link } from "react-router-dom";
import "./styles/Home.css";
import gsap from "gsap";
import butterfly from "../assets/butterfly.png";
import services_data from "../data/services";
import media_data from "../data/services_media";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Card from "../components/UI/Card";
import Card_media from "../components/UI/Card_media";
import Footer from "../components/UI/Footer";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function Home() {
  useGSAP(() => {
    gsap.from(".left", {
      x: -500,
      duration: 3,
    });
    gsap.fromTo(
      ".right",
      {
        x: 400,
        duration: 2,
      },
      {
        x: 150,
        duration: 2,
      },
    );
    gsap.to(".right", {
      scale: 2,
      scaleX: 1.7,
      y: 300,
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
    gsap.to(".fly", {
      x: -400,
      y: 350,
      scale: 0.1,
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
    gsap.from(".card", {
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: ".section",
        start: "top center",
        end: "bottom top",
      },
    });
  });
  return (
    <>
      <NavBar />
      <div className="fly">
        <img src={butterfly} alt="" />
      </div>
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
              className="card"
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
        <p className="slogan">Featured Work</p>
        <h1 className="grad-text">Proven Results</h1>
        <p className="margintop">
          Explore our portfolio of delivered projects
        </p>
        <div className="sec1">
          <div className="pr left-sec1"></div>
          <div className="pr right-sec1"></div>
        </div>

        <div className="sec2">
          <div className="pr left-sec2"></div>
          <div className="pr right-sec2"></div>
        </div>

        <div className="sec3">
          <div className="pr left-sec3"></div>
          <div className="pr middle-sec3"></div>
          <div className="pr right-sec3"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
