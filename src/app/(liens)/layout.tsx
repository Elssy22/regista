import { Animations } from "@/components/effets/Animations";
import { Curseur } from "@/components/effets/Curseur";
import "../globals.css";

/**
 * Le gabarit de la page de liens : les styles du site, le curseur et les
 * apparitions, sans écran de chargement ni défilement doux (la page doit
 * s'afficher tout de suite quand on arrive depuis Instagram).
 */
export default function GabaritLiens({ children }: LayoutProps<"/">) {
  return (
    <>
      <Curseur />
      {children}
      <Animations />
    </>
  );
}
