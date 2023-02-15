import React from "react";
import Card from "./components/Card/Card";
import Header from "./components/Header";

function App() {

  const cardText = 'Some text';
  return (
    <>
      <Header
        name="My Website"
        css={{ padding: "5px", backgroundColor: "green" }}
      />
      <Card title="My Card" text={cardText}/>
      <Card title="My Card" text={cardText}/>
      <Card title="My Card" text={cardText}/>
      <Card title="My Card" text={cardText}/>
    </>
  );
}

export default App;
