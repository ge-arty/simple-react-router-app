import { useParams } from "react-router-dom";
import { Title } from "../styles/styles";
const facts = [
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
const Fact = () => {
  const { id } = useParams();

  const fact = facts.find((fact) => fact.id == id);

  if (!fact) {
    return <Title>Fact not Found!</Title>;
  }

  return (
    <div>
      <Title>Fact ID: {fact.id}</Title>
      <p>{fact.fact}</p>
    </div>
  );
};

export default Fact;
