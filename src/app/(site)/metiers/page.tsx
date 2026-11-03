import type { Metadata } from "next";
import { Entete } from "@/components/Entete";
import { PiedDePage } from "@/components/PiedDePage";
import { TitrePage } from "@/components/blocs/TitrePage";
import { Metiers } from "@/components/accueil/Metiers";
import { Piliers } from "@/components/blocs/Piliers";

export const metadata: Metadata = {
  title: "Métiers",
  description:
    "Mieux raconter, accéder aux bons circuits de financement, s’outiller : ce que fait Regista, et ses cinq métiers (storytelling, social média, événementiel, financement, digital).",
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
