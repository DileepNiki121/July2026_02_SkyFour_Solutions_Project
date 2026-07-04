import { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo/logo.jpg";


export default function Navbar() {
  const [active, setActive] = useState("home");

  const menu = [
    "home",
    "about",
    "jobs",
    "projects",
    "services",
    "contact",
  ];

  const scrollToSection = (id) => {
    setActive(id);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header>

      <div className="navbar">

        <div className="logo">

          <img src={logo} alt="SkyFour Solutions Logo" />

          <div>
            <h2>SkyFour Solutions</h2>
            <p>Careers • Work From Home Jobs</p>
          </div>

        </div>

        <nav>

          {menu.map((item) => (
            <button
              key={item}
              className={active === item ? "nav-btn active" : "nav-btn"}
              onClick={() => scrollToSection(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}

        </nav>

        <button className="apply-btn">
          Apply Now
        </button>

      </div>

    </header>
  );
}