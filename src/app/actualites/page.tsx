import type { Metadata } from "next";
import { Entete } from "@/components/Entete";
import { PiedDePage } from "@/components/PiedDePage";
import { TitrePage } from "@/components/blocs/TitrePage";
import { SectionActualites } from "@/components/blocs/SectionActualites";

export const metadata: Metadata = {
  title: "Actualités",
  // Contenu fictif : pas d'indexation tant que les vrais articles ne sont pas là.
  robots: { index: false, follow: true },
};

export default function PageActualites() {
  return (
    <>
      <Entete />
      <main id="contenu">
        <TitrePage titre="Actualités" texte="Conseils, coulisses et nouvelles du terrain." />
        <SectionActualites avecTitre={false} />
      </main>
      <PiedDePage />
    </>
  );
}
