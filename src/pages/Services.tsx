import { useState } from "react";
import Card from "../components/UI/Card";
import Footer from "../components/UI/Footer";
import NavBar from "../components/UI/NavBar";
import services from "../data/all";
import "./styles/Services.css";

function Services() {
  const [search, setSearch] = useState("");

  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <NavBar />

      <div className="services">
        <div className="search">
          <input
            type="text"
            placeholder="Search services..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="services_sec">
          {filteredServices.map((data, index) => (
            <Card
              key={index}
              className="serv_card"
              title={data.title}
              desc={data.desc}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Services;