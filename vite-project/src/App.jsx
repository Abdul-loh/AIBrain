import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./Component/Benefit";
import Collaboration from "./Component/Collaboration";
import Footers from "./Component/Footers.jsx";

import Header from "./Component/Header";
import Hero from "./Component/Hero";
import Pricing from "./Component/Pricing";
import Roadmap from "./Component/Roadmap.jsx";
import Service from "./Component/Service";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header></Header>
        <Hero></Hero>
        <Benefits />
        <Collaboration />
        <Service />
        <Pricing />
        <Roadmap />
        <Footers />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
