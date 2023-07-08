import { FooterWrapper } from "../styles/styles";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterWrapper>
      <p>Made by:</p>
      <Link to={`https://www.linkedin.com/in/george-arutinyan/`}>
        George Arutinyan
      </Link>
    </FooterWrapper>
  );
};
export default Footer;
