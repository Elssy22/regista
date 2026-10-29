import { Entete } from "@/components/Entete";
import { PiedDePage } from "@/components/PiedDePage";
import { Contact } from "@/components/Contact";
import { Ouverture } from "@/components/accueil/Ouverture";
import { Clients } from "@/components/accueil/Clients";
import { Agence } from "@/components/accueil/Agence";
import { Metiers } from "@/components/accueil/Metiers";
import { Realisations } from "@/components/accueil/Realisations";
import { Methode } from "@/components/accueil/Methode";
import { Partenaires } from "@/components/accueil/Partenaires";

/**
 * La page d'accueil suit l'ordre du template Nino : ouverture, clients,
 * agence, métiers, réalisations, méthode, partenaires, contact.
 * Les fonds alternent crème et bleu, comme les pages du deck.
 */
export default function Accueil() {
  return (
    <>
      <Entete />
      <main id="contenu">
        <Ouverture />
        <Clients />
        <Agence />
        <Metiers />
        <Realisations />
        <Methode />
        <Partenaires />
        <Contact />
      </main>
      <PiedDePage />
    </>
  );
}
