import Navbar from "./ui/Navbar";

import Flower from "./assets/flower.svg";

import Marquee from "react-fast-marquee";
import Header from "./ui/Header";
import ExperienceContainer from "./app/experience/ExperienceContainer";
import PastProjectContainer from "./app/past-projects/PastProjectContainer";
import Footer from "./ui/Footer";
import CtaFooter from "./ui/CtaFooter";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <div className="border-y-4 border-black py-4">
        <Marquee autoFill speed={20}>
          <div className="mr-10 flex items-center gap-10">
            <p className="font-title text-3xl">tigadika</p>
            <img src={Flower} alt="" className="w-8" />
          </div>
        </Marquee>
      </div>
      <PastProjectContainer />
      <ExperienceContainer />
      <div className="border-y-4 border-black py-4">
        <Marquee autoFill speed={20} direction="right">
          <div className="mr-10 flex items-center gap-10">
            <p className="font-title text-3xl">tigadika</p>
            <img src={Flower} alt="" className="w-8" />
          </div>
        </Marquee>
      </div>
      <CtaFooter />
      <Footer />
    </>
  );
}

export default App;
