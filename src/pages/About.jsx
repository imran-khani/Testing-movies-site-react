import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <>
      About
      <Link to={"about1"}> About 1</Link>
      <Link to={"about2"}> About 2</Link>
      <Outlet />
    </>
  );
};

export default About;
