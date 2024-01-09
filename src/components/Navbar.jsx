import React from "react";
// import logo from "../assets/Navbar/logo.png";
// import arrowDown from "../assets/Navbar/arrow-down.png";
import navbarData from "../data/navbarData";
const Navbar = () => {
  return (
    <div className="navbar">
      <header className="navbar-top">
        <div>
          <img src={"assets/Navbar/logo.png"} alt="logo" />
          <div>
            <p>Nishyan</p>
            <a
              //   className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Store
            </a>
          </div>
        </div>
        <img src={"assets/Navbar/arrow-down.png"} alt="logo" />
      </header>
      <body>
        {navbarData.map((item) => {
          return (
            <div className="navbar-pages" key={item.id}>
              <img src={item.path} alt="logo" />
              <text>{item.text}</text>
            </div>
          );
        })}
      </body>
    </div>
  );
};
export default Navbar;
