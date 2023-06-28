import Logo from "../assets/images/cover.png";

export const Navbar = () => {
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
            <a href="#review">review</a>
          </li>
        </ul>
      </nav>

      <div id="menu-btn" className="fas fa-bars"></div>
    </header>
  );
};
