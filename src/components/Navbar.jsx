import { useEffect } from "react";
import Logo from "../assets/images/cover.png";

export const Navbar = () => {
  useEffect(() => {
    const navbar = document.querySelector(".header .navbar");
    const menuBtn = document.querySelector("#menu-btn");
    const closeBtn = document.querySelector("#close-navbar");

    const openMenu = () => {
      menuBtn.classList.toggle("active");
      navbar.classList.toggle("active");
    };

    const closeMenu = () => {
      menuBtn.classList.toggle("active");
      navbar.classList.toggle("active");
    };

    const toggle = () => {
      menuBtn.classList.remove("active");
      navbar.classList.remove("active");
    };

    menuBtn.addEventListener("click", openMenu);
    closeBtn.addEventListener("click", closeMenu);

    document.querySelectorAll(".nav-item").forEach((n) => {
      n.addEventListener("click", toggle);
    });

    return () => {
      // Cleanup: Remove event listeners when the component unmounts
      menuBtn.removeEventListener("click", openMenu);
      closeBtn.removeEventListener("click", closeMenu);
      document.querySelectorAll(".nav-item").forEach((n) => {
        n.removeEventListener("click", toggle);
      });
    };
  }, []);

  return (
    <header className="header">
      <a href="#" className="logo">
        <img src={Logo} alt="" className="emblem" />
      </a>

      <nav className="navbar">
        <div id="close-navbar" className="fas fa-times"></div>

        <ul>
          <li className="nav-item">
            <a href="#home">home</a>
          </li>
          <li className="nav-item">
            <a href="#about">about</a>
          </li>
          <li className="nav-item">
            <a href="#services">services</a>
          </li>
          <li className="nav-item">
            <a href="#styles">styles</a>
          </li>
          <li className="nav-item">
            <a href="#pricing">pricing</a>
          </li>
          <li className="nav-item">
            <a href="#blogs">blogs</a>
          </li>
          <li className="nav-item">
            <a href="#visit">book a visit</a>
          </li>
          <li className="nav-item">
            <a href="#review">reviews</a>
          </li>
        </ul>
      </nav>

      <div id="menu-btn" className="fas fa-bars"></div>
    </header>
  );
};
