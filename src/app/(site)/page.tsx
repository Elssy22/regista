import { Entete } from "@/components/Entete";
import { PiedDePage } from "@/components/PiedDePage";
import { Ouverture } from "@/components/accueil/Ouverture";
import { Agence } from "@/components/accueil/Agence";
import { Metiers } from "@/components/accueil/Metiers";
import { GrilleProjets } from "@/components/blocs/GrilleProjets";
import { Temoignages } from "@/components/blocs/Temoignages";
import { SectionActualites } from "@/components/blocs/SectionActualites";
import { BlocContact } from "@/components/blocs/BlocContact";

/**
 * L'accueil, dans l'ordre exact du template Nino : ouverture, clients et
 * agence, métiers, réalisations, témoignages, actualités, contact.
 */
// Les actualités viennent du back office : la page se met à jour toutes les minutes.
export const revalidate = 60;

export default function Accueil() {
  return (
    <>
      <Entete />
      <main id="contenu">
        <Ouverture />
        <Agence />
        <Metiers />
        <GrilleProjets />
        <Temoignages />
        <SectionActualites limite={3} />
        <BlocContact />
      </main>
      <PiedDePage />
    </>
  );
}
