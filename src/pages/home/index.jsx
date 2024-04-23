import React, { useState, useEffect } from "react";

function Home() {
  const renderDummyData = () => {
    const elements = [];
    for (let i = 0; i <= 100; i++) {
      elements.push(
        <>
          <span key={i} style={{ textAlign: "center" }}>
            TEXT {i}
          </span>{" "}
          <br />
        </>
      );
    }
    return elements;
  };
  console.log("renderDummyData==>", renderDummyData);
  return (
    <div
      style={{ width: "100%", border: "1px solid #000", textAlign: "center" }}
    >
      {renderDummyData()}
    </div>
  );
}

export default Home;
