import React from "react";

const Header = () => {
  const [query, setQuery] = React.useState("");
  const handleSubmit = () => {};
  const handleChange = () => {};
  return (
    <div className="header">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
        }}
      >
        <text>Payments</text>
        <img src={"assets/Header/question-mark.png"} alt="logo" />
        <text>How it works</text>
      </div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          padding: 5,
          backgroundColor: "white",
          width: "30%",
        }}
        className="arrow-container"
      >
        <button type="submit" style={{ backgroundColor: "white" }}>
          <img
            src={"assets/search.png"}
            alt="logo"
            style={{ backgroundColor: "white" }}
          />
        </button>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          className="no-outline"
          placeholder="Search features, tutorials, etc..."
        />
      </form>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
        }}
      >
        <img
          src={"assets/Header/chat.png"}
          alt="logo"
          style={{ backgroundColor: "#E6E6E6", padding: 10, borderRadius: 30 }}
        />
        <img
          src={"assets/Header/below.png"}
          alt="logo"
          style={{ backgroundColor: "#E6E6E6", padding: 15, borderRadius: 30 }}
        />
      </div>
    </div>
  );
};

export default Header;
