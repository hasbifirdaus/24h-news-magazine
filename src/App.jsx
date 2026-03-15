import Entertainment from "./sections/landing-page/entertainment/Entertaiment";
import HealthNews from "./sections/landing-page/health-news/HealthNews";
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
      <HealthNews />
    </>
  );
}

export default App;
