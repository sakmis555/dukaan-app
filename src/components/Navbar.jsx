import React from "react";
import navbarData from "../data/navbarData";
const Navbar = () => {
  return (
    <div className="navbar">
      {/* <header> */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 15,
          height: 40,
        }}
      >
        <img src={"assets/Navbar/logo.png"} alt="logo" />
        <div style={{ display: "flex", flexDirection: "column", gap: -5 }}>
          <p style={{ color: "white" }}>Nishyan</p>
          <a
            //   className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
          >
            Visit Store
          </a>
        </div>
        <img src={"assets/Navbar/arrow-down.png"} alt="logo" />
      </div>
      {/* </header> */}
      <body>
        {navbarData.map((item) => {
          return (
            <div
              className="navbar-pages"
              key={item.id}
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 20,
                padding: 15,
                paddingLeft: 20,
              }}
            >
              <img src={item.path} alt="logo" />
              <text style={{ color: "white" }}>{item.text}</text>
            </div>
          );
        })}
      </body>
    </div>
  );
};
export default Navbar;
