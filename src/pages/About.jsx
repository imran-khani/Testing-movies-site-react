import React from "react";
import { Name } from "../App";
const About = () => {
  return (
    <div>
      <Name.Consumer>
        {(myName) => {
          return <h1>my name is {myName}</h1>;
        }}
      </Name.Consumer>
    </div>
  );
};

export default About;
