import { NavLink } from "react-router-dom";
import { HeaderWrapper, NavigationWrapper, Title } from "../styles/styles";
import { useState } from "react";

const Header = () => {
  const [randomFact, setRandomFact] = useState(1);
  const randomizeNumber = () => {
    setRandomFact(Math.floor(Math.random() * 10) + 1);
  };

  return (
    <HeaderWrapper>
      <Title>SinglePageApp</Title>
      <nav style={{ width: "100%" }}>
        <NavigationWrapper>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li onClick={() => randomizeNumber()}>
            <NavLink to={`/fact/${randomFact}`}>Fact Random</NavLink>
          </li>
        </NavigationWrapper>
      </nav>
    </HeaderWrapper>
  );
};
export default Header;
