import HeroSection from "@/components/HeroSection";
import Result from "@/components/Result";
import ScoreCard from "@/components/ScoreCard";
import {Category} from "@/components/Category";
import {CategoriesAnalysis} from "@/components/CategoriesAnalysis";
import {TruthBombs} from "@/components/TruthBombs";
import {UnlockTheForge} from "@/components/UnlockTheForge";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Result />
      <ScoreCard />
      <Category />
      <CategoriesAnalysis />
      <TruthBombs />
      <UnlockTheForge />

    </main>
  );
}
