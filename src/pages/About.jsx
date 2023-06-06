import { Fname } from "../App";

const About = () => {
  return (
    <>
      This is About Page <br />
      {/* learning React context api here */}
      <Fname.Consumer>
        {(fname) => {
          return <h1>My name is {fname}</h1>;
        }}
      </Fname.Consumer>
    </>
  );
};

export default About;
