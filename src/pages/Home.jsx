import geralt from "../assets/geralt.jpg";
import { HomeWrapper, Title } from "../styles/styles";
const Home = () => {
  return (
    <HomeWrapper>
      <Title>The Witcher</Title>
      <img
        style={{
          width: "100%",
          maxWidth: "500px",
          height: "100%",
          borderRadius: "20px",
        }}
        src={geralt}
        alt="Geralt Picture"
      />
      <p style={{ color: "blue" }}>Geralt from Rivia</p>
    </HomeWrapper>
  );
};

export default Home;
