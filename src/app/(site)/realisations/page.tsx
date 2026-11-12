import type { Metadata } from "next";
import { Entete } from "@/components/Entete";
import { PiedDePage } from "@/components/PiedDePage";
import { TitrePage } from "@/components/blocs/TitrePage";
import { GrilleProjets } from "@/components/blocs/GrilleProjets";

export const metadata: Metadata = {
  title: "Réalisations — Projets pour clubs de foot et marques",
  description:
    "Stratégie pour le FC Rocquancourt, réseaux sociaux de Maison de la Literie, événement All African Celebration : les projets de Regista, agence football.",
};

export default function PageRealisations() {
  return (
    <>
      <Entete />
      <main id="contenu">
        <TitrePage titre="Réalisations" texte="Une sélection de nos réalisations : stratégie, social média, événementiel." />
        <GrilleProjets />
      </main>
      <PiedDePage />
    </>
  );
}
