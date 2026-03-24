import EditorPicks from "./sections/landing-page/editor-picks/EditorPicks";
import Entertainment from "./sections/landing-page/entertainment/Entertainment";
import HealthNews from "./sections/landing-page/health-news/HealthNews";
import Hero from "./sections/landing-page/hero/Hero";
import LatestTechnology from "./sections/landing-page/latest-technology/LatestTechnology";
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
      <LatestTechnology />
      <EditorPicks />
    </>
  );
}

export default App;
