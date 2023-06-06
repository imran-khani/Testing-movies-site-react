import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div className="text-center text-4xl">
        <canvas className="snow" id="snow"></canvas>
        <div className="main-text">
          <h1 className="text-red-300">
            Aw jeez.
            <br />
            That page has gone missing.
          </h1>
          <Link className="home-link text-blue-500" to={'/'}>
            Hitch a ride back home.
          </Link>
        </div>
        <div className="ground">
          <div className="mound">
            <div className="mound_text">404</div>
            <div className="mound_spade"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
