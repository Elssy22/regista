import type { Metadata } from "next";
import { Entete } from "@/components/Entete";
import { PiedDePage } from "@/components/PiedDePage";
import { TitrePage } from "@/components/blocs/TitrePage";
import { SectionActualites } from "@/components/blocs/SectionActualites";

export const metadata: Metadata = {
  title: "Actualités",
  description: "Conseils, coulisses et nouvelles du terrain : le blog de Regista.",
};

// Les articles viennent du back office : la page se met à jour toutes les minutes.
export const revalidate = 60;

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
