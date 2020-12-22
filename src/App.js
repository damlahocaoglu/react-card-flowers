import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import CardComp from "./components/Card";
import Card from "./data/card";

export default function App() {
  const colSize = 6;

  const CardImg = Card.map(item => (
    <div className={`col-sm-${colSize} mb-2`}>
      <CardComp item={item} />
    </div>
  ));

  return (
    <div>
      <Navbar />
      <Main />
      <div className="container">
        <div className="row">{CardImg}</div>
      </div>
      <Footer />
    </div>
  );
}
