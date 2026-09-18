import Header from "@/_ancien/components/layout/Header";
import Footer from "@/_ancien/components/layout/Footer";
import Hero from "@/_ancien/components/sections/Hero";
import ConferenceDePresse from "@/_ancien/components/sections/ConferenceDePresse";
import GestesTechniques from "@/_ancien/components/sections/GestesTechniques";
import DerniersMatchs from "@/_ancien/components/sections/DerniersMatchs";
import NotreRegista from "@/_ancien/components/sections/NotreRegista";
import PrendreRDV from "@/_ancien/components/sections/PrendreRDV";

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
