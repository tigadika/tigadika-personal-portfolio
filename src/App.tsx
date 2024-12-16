import Navbar from "./ui/Navbar";
import Header from "./ui/Header";

import TechStacks from "./ui/TechStacks";
import ExperienceContainer from "./app/experience/ExperienceContainer";
import PastProjectContainer from "./ui/past-projects/PastProjectContainer";
import CtaFooter from "./ui/CtaFooter";
import Footer from "./ui/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <TechStacks />
      <ExperienceContainer />
      <PastProjectContainer />
      <CtaFooter />
      <Footer />
    </>
  );
}

export default App;
