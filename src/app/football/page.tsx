import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ConferenceDePresse from "@/components/sections/ConferenceDePresse";
import GestesTechniques from "@/components/sections/GestesTechniques";
import DerniersMatchs from "@/components/sections/DerniersMatchs";
import NotreRegista from "@/components/sections/NotreRegista";
import PrendreRDV from "@/components/sections/PrendreRDV";

export default function FootballPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ConferenceDePresse />
        <GestesTechniques />
        <DerniersMatchs />
        <NotreRegista />
        <PrendreRDV />
      </main>
      <Footer />
    </>
  );
}
