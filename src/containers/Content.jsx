import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Fact from "../pages/Fact";

const Content = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/fact/:id" element={<Fact />} />
      </Routes>
    </div>
  );
};
export default Content;
