import Audience from "./components/Audience";
import Ecosystem from "./components/Ecosystem";
import Hero from "./components/Hero";
import Methodology from "./components/Methodology";
import Offer from "./components/Offer";
import Philosophy from "./components/Philosophy";
import ProblemSolution from "./components/ProblemSolution";
import SocialProof from "./components/SocialProof";
import WealthBuilding from "./components/WealthBuilding";

export default function App() {
  return (
    <main className="relative flex flex-col min-h-screen w-full bg-[#0B0B0B] text-white selection:bg-[#996848] selection:text-black overflow-x-hidden">
      <Hero />
      <WealthBuilding />
      <ProblemSolution />
      <Philosophy />
      <Audience />
      <Methodology />
      <Ecosystem />
      <Offer />
      <SocialProof />
    </main>
  );
}
