import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import "./styles.css";

const App = () => {
  const [index, setIndex] = useState(0);

  const texts = ["Deep1", "Deepthi2", "Deepthi Hariraman3"];

  return (
    <section className="app">
      <Header index={index} />
      <Main index={index} texts={texts} />
      <Footer setIndex={setIndex} index={index} />
    </section>
  );
};

export default App;
