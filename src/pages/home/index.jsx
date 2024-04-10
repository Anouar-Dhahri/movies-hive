import React, { useState, useEffect } from "react";

function Home() {
  const renderDummyData = () => {
    const elements = [];
    for (let i = 0; i <= 100; i++) {
      elements.push(<><span key={i}>TEXT {i}</span> <br/></>);
    }
    return elements;
  };
  console.log("renderDummyData==>", renderDummyData)
  return <div>{renderDummyData()}</div>;
}

export default Home;
