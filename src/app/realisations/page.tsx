import type { Metadata } from "next";
import { Entete } from "@/components/Entete";
import { PiedDePage } from "@/components/PiedDePage";
import { TitrePage } from "@/components/blocs/TitrePage";
import { GrilleProjets } from "@/components/blocs/GrilleProjets";

export const metadata: Metadata = {
  title: "Réalisations",
  description: "Une sélection des réalisations de Regista pour les clubs, les associations et les marques.",
};

export default function PageRealisations() {
  return (
    <>
      <Entete />
      <main id="contenu">
        <TitrePage titre="Réalisations" texte="Une sélection de nos réalisations : pilotage, social média, événementiel." />
        <GrilleProjets />
      </main>
      <PiedDePage />
    </>
  );
}
