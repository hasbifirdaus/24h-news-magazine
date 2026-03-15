import Entertainment from "./sections/landing-page/entertainment/Entertaiment";
import Hero from "./sections/landing-page/hero/Hero";
import Money from "./sections/landing-page/money/Money";
import Navbar from "./sections/landing-page/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Entertainment />
      <Money />
    </>
  );
}

export default App;
