import Link from "next/link";
import { AppelContact } from "./blocs/AppelContact";
import styles from "./PiedDePage.module.css";

/**
 * Le pied de page du template, sur toutes les pages : le très grand appel
 * « Parlons-en » (sur or), puis la ligne de bas de page. Avec appel={false}
 * (accueil, Contact), l'appel est ailleurs ou inutile : la ligne prend la
 * couleur du formulaire de contact juste au-dessus (fond).
 */
export function PiedDePage({ appel = true, fond = "creme" }: { appel?: boolean; fond?: "creme" | "or" }) {
  return (
    <>
      {appel && <AppelContact />}
      <footer className={`${appel ? "fond-or" : `fond-${fond}`} ${styles.pied}`}>
        <div className={`conteneur ${styles.bas}`}>
          <p>Regista · Agence football</p>
          <ul>
            <li>
              <Link href="/mentions-legales">Mentions légales</Link>
            </li>
            <li>
              <Link href="/politique-confidentialite">Confidentialité</Link>
            </li>
            <li>© {new Date().getFullYear()} Regista</li>
          </ul>
        </div>
      </footer>
    </>
  );
}
