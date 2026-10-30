import { Animations } from "@/components/effets/Animations";
import { Prechargement } from "@/components/effets/Prechargement";
import { Curseur } from "@/components/effets/Curseur";
import { RetourHaut } from "@/components/effets/RetourHaut";
import { DefilementDoux } from "@/components/effets/DefilementDoux";
import "../globals.css";

/** Le gabarit des pages publiques : styles du site et animations du template. */
export default function GabaritSite({ children }: LayoutProps<"/">) {
  return (
    <>
      <Prechargement />
      <Curseur />
      {children}
      <RetourHaut />
      <Animations />
      <DefilementDoux />
    </>
  );
}
