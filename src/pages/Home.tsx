import NavBar from "../components/UI/NavBar";
import { Link } from "react-router-dom";
import "./styles/Home.css";
import gsap from "gsap";
import heroimg from "../assets/butterfly.png";
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
    // Hero Entrance Animation
    const tl = gsap.timeline({
      defaults: {
        ease: "power4.inOut",
      },
    });

    tl.from(".slogan", {
      opacity: 0,
      y: 40,
      duration: 0.8,
    })
      .from(
        ".grad-text",
        {
          opacity: 0,
          y: 60,
          duration: 1,
        },
        "-=0.4",
      )
      .from(
        ".left p:not(.slogan)",
        {
          opacity: 0,
          y: 30,
          duration: 0.8,
        },
        "-=0.6",
      )
      .from(
        ".btns",
        {
          opacity: 0,
          y: 40,
          duration: 0.8,
          clearProps: "all",
        },
        "-=0.5",
      )
      .from(
        ".right",
        {
          opacity: 0,
          x: 200,
          scale: 0.8,
          rotate: 8,
          duration: 1.3,
        },
        "-=1",
      );

    // Hero Image Scroll Animation
    gsap.to(".right", {
      y: 180,
      scale: 1.15,
      rotate: -6,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 2,
      },
    });

    // Mouse Parallax
    const move = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;

      gsap.to(".right", {
        x,
        y,
        duration: 1.2,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", move);

    // Services Cards
    gsap.from(".card", {
      y: 100,
      scale: 0.85,
      stagger: 0.15,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".cards",
        start: "top 75%",
      },
    });

    // Media Cards
    gsap.from(".media-card", {
      opacity: 0,
      y: 100,
      rotateY: 35,
      stagger: 0.15,
      duration: 1,
      ease: "power4.out",
      clearProps: "transform",
      scrollTrigger: {
        trigger: ".media-cards",
        start: "top 75%",
      },
    });

    gsap.utils
      .toArray<HTMLElement>(".pr")
      .forEach((project) => {
        gsap.from(project, {
          opacity: 0,
          y: 80,
          scale: 0.85,
          rotate: gsap.utils.random(-6, 6),
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: project,
            start: "top 80%",
          },
        });
      });

    return () => {
      window.removeEventListener("mousemove", move);
    };
  });

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
            and reality.
          </p>

          <div className="btns">
            <Link className="primary-btn" to="/services">
              Explore Services
            </Link>

            <Link className="primary-btn sec" to="/contact">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="right">
          <img src={heroimg} alt="Software Development" />
        </div>
      </div>

      <div className="section">
        <p className="slogan">Our Expertise</p>

        <h1 className="grad-text">
          Comprehensive Digital Suite
        </h1>

        <div className="cards">
          {services_data.map((data, index) => (
            <Card
              key={index}
              className="card"
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
          Innovative solutions to help your business scale.
        </p>

        <div className="media-cards">
          {media_data.map((data, index) => (
            <Card_media
              key={index}
              className="media-card"
              image={data.URL}
              title={data.title}
              desc={data.desc}
            />
          ))}
        </div>
      </div>

      <div className="section prove">
        <p className="slogan">Featured Work</p>

        <h1 className="grad-text">Proven Results</h1>

        <p className="margintop">
          Explore our portfolio of delivered projects.
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
