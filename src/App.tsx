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
    <main className="relative min-h-screen w-full bg-venus-bg text-venus-black selection:bg-venus-gold selection:text-white overflow-x-hidden">
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
