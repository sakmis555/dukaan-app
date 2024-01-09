import React from "react";

const Overview = () => {
  return (
    <div className="overview">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          // backgroundColor: "black",
          height: 45,
        }}
      >
        <text
          style={{
            display: "flex",
            justifySelf: "baseline",
            fontWeight: "700",
            fontSize: 24,
            marginBottom: 20,
          }}
        >
          Overview
        </text>
        <div className="arrow-container">
          <div style={{ height: 30 }}>Last Month</div>
        </div>
      </div>
      <div style={{ display: "flex", gap: "4%", height: 90 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "baseline",
            backgroundColor: "white",
            width: "48%",
            borderRadius: 20,
            justifyContent: "flex-start",
            padding: 20,
          }}
        >
          <text>Online Orders</text>
          <text style={{ fontWeight: "700", fontSize: 32 }}>213</text>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "baseline",
            backgroundColor: "white",
            width: "48%",
            borderRadius: 20,
            justifyContent: "flex-start",
            padding: 20,
          }}
        >
          <text>Amount Recieved</text>
          <text style={{ fontWeight: "700", fontSize: 32 }}>₹ 23,453,434</text>
        </div>
      </div>
    </div>
  );
};

export default Overview;
