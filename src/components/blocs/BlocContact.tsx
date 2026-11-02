import { siteConfig } from "@/lib/site-config";
import { reseaux } from "@/lib/contenu";
import { TitreSection } from "./TitreSection";
import { Formulaire } from "./Formulaire";
import { IconeReseau } from "../Icones";
import styles from "./BlocContact.module.css";

/**
 * La section contact du template : coordonnées à gauche, formulaire à droite.
 * Sur crème par défaut ; sur or à l'accueil, sous « Parlons-en » en crème.
 */
export function BlocContact({ fond = "creme" }: { fond?: "creme" | "or" }) {
  const { email, telephoneAffiche, telephoneLien } = siteConfig.contact;
  return (
    <section id="contact" className={`section fond-${fond}`} aria-labelledby="titre-contact">
      <div className="conteneur">
        <TitreSection id="titre-contact">Contactez-nous</TitreSection>
        <div className={styles.grille}>
          <div className={styles.infos} data-apparait style={{ "--delai": "0.2s" } as React.CSSProperties}>
            <div className={styles.ligne}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="12" cy="9.5" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
              </svg>
              <h3>Notre bureau :</h3>
              <p>Île-de-France</p>
            </div>
            <div className={styles.ligne}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 14v-2a8 8 0 0 1 16 0v2M4 14h3v5H4zM17 14h3v5h-3z" fill="none" stroke="currentColor" strokeWidth="1.6" />
              </svg>
              <h3>Téléphone :</h3>
              <p>
                <a href={`tel:${telephoneLien}`}>{telephoneAffiche}</a>
              </p>
            </div>
            <div className={styles.ligne}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3 6h18v12H3zM3 6l9 7 9-7" fill="none" stroke="currentColor" strokeWidth="1.6" />
              </svg>
              <h3>E-mail :</h3>
              <p>
                <a href={`mailto:${email}`}>{email}</a>
              </p>
            </div>
            <div className={styles.ligne}>
              <h3>Réseaux</h3>
              <ul className={styles.reseaux}>
                {reseaux.map((r) => (
                  <li key={r.nom}>
                    {r.href ? (
                      <a href={r.href} target="_blank" rel="noopener noreferrer">
                        <IconeReseau nom={r.nom} />
                        <span className="visuellement-cache">{r.nom}</span>
                      </a>
                    ) : (
                      <span title={`${r.nom} : lien à venir`}>
                        <IconeReseau nom={r.nom} />
                        <span className="visuellement-cache">{r.nom} (lien à venir)</span>
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.formulaire} data-apparait style={{ "--delai": "0.4s" } as React.CSSProperties}>
            <Formulaire />
          </div>
        </div>
      </div>
    </section>
  );
}
