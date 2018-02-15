import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <h1>Home!!</h1>
      <a href="/about">
        <input type="button" value="About" />
      </a>
      <a href="/domore">
        <input type="button" value="Do more" />
      </a>
    </div>
  );
};

export default Home;
