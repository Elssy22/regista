import type { Metadata } from "next";
import { Entete } from "@/components/Entete";
import { PiedDePage } from "@/components/PiedDePage";
import { TitrePage } from "@/components/blocs/TitrePage";
import { BlocContact } from "@/components/blocs/BlocContact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Écrivez ou appelez Regista : réponse sous 24 h.",
};

export default function PageContact() {
  return (
    <>
      <Entete />
      <main id="contenu">
        <TitrePage
          titre="Écrivez-nous"
          texte="Écrivez-nous ou appelez-nous : nous sommes toujours ravis de découvrir un nouveau projet, et nous vous répondons sous 24 h."
        />
        <BlocContact />
      </main>
      <PiedDePage />
    </>
  );
}
