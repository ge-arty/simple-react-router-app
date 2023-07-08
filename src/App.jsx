import Header from "./containers/Header";
import Content from "./containers/Content";
import Footer from "./containers/Footer";
import { AppWrapper } from "./styles/styles";

function App() {
  const witcherFacts = [
    {
      id: 1,
      fact: "Geralt of Rivia is the central character in the Witcher series.",
    },
    {
      id: 2,
      fact: "The Witcher series is based on the book series by Andrzej Sapkowski.",
    },
    {
      id: 3,
      fact: "Geralt is a Witcher, a professional monster hunter with enhanced abilities.",
    },
    {
      id: 4,
      fact: "Yennefer of Vengerberg is a powerful sorceress and one of Geralt's love interests.",
    },
    {
      id: 5,
      fact: "Cirilla, also known as Ciri, is a princess with a significant role in the series.",
    },
    {
      id: 6,
      fact: "The Witcher series features a richly detailed fantasy world called the Continent.",
    },
    {
      id: 7,
      fact: "Geralt wields two swords, one made of steel for humans and one of silver for monsters.",
    },
    {
      id: 8,
      fact: "Monsters in the Witcher universe are drawn from various mythologies and folklore.",
    },
    {
      id: 9,
      fact: "The Witcher series explores moral ambiguity and the consequences of choices.",
    },
    {
      id: 10,
      fact: "The Netflix adaptation of The Witcher has gained widespread popularity.",
    },
  ];

  return (
    <AppWrapper>
      <Header />
      <Content />
      <Footer />
    </AppWrapper>
  );
}

export default App;
