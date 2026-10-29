import type { Metadata } from "next";
import { Entete } from "@/components/Entete";
import { PiedDePage } from "@/components/PiedDePage";
import { TitrePage } from "@/components/blocs/TitrePage";
import { Metiers } from "@/components/accueil/Metiers";

export const metadata: Metadata = {
  title: "Métiers",
  description: "Storytelling, social média, événementiel, financement et digital : les cinq métiers de Regista.",
};

export default function PageMetiers() {
  return (
    <>
      <Entete />
      <main id="contenu">
        <TitrePage titre="Métiers" texte="Présents sur tous les terrains." />
        <Metiers avecTitre={false} />
      </main>
      <PiedDePage />
    </>
  );
}
