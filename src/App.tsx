import Navbar from "./ui/Navbar";
import Header from "./ui/Header";

import TechStacks from "./ui/TechStacks";
import ExperienceContainer from "./app/experience/ExperienceContainer";
import PastProjectContainer from "./ui/past-projects/PastProjectContainer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <TechStacks />
      <ExperienceContainer />
      <PastProjectContainer />
    </>
  );
}

export default App;
