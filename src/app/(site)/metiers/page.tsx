import type { Metadata } from "next";
import { Entete } from "@/components/Entete";
import { PiedDePage } from "@/components/PiedDePage";
import { TitrePage } from "@/components/blocs/TitrePage";
import { Metiers } from "@/components/accueil/Metiers";
import { Piliers } from "@/components/blocs/Piliers";

export const metadata: Metadata = {
  title: "Métiers — Communication, financement et digital football",
  description:
    "Storytelling, réseaux sociaux, événementiel, subventions et sponsors, sites internet : ce que Regista fait pour les clubs de foot et les structures du football.",
};

export default function PageMetiers() {
  return (
    <>
      <Entete />
      <main id="contenu">
        <TitrePage titre="Métiers" texte="Présents sur tous les terrains." />
        <Piliers />
        <Metiers />
      </main>
      <PiedDePage />
    </>
  );
}
