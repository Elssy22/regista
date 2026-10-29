import Image from "next/image";
import { chiffres, clients, manifeste } from "@/lib/contenu";
import { Compteur } from "../effets/Compteur";
import styles from "./Agence.module.css";

/** Valeur numérique et suffixe d'un chiffre : « 100 % » → 100 et « % ». */
function decouper(valeur: string) {
  const m = valeur.match(/^(\d+)(.*)$/);
  return m ? { n: Number(m[1]), suffixe: m[2] } : { n: 0, suffixe: valeur };
}

/**
 * Le bloc sombre du template : le bandeau de logos qui défile, puis
 * « À propos » avec les chiffres qui défilent de 0 à leur valeur.
 */
export function Agence() {
  return (
    <section id="agence" className={`fond-bleu texture ${styles.agence}`} aria-labelledby="titre-agence">
      <div className={styles.clients}>
        <h2 className={styles.clientsTitre}>Ils nous font confiance</h2>
        <div className={styles.defilant}>
          <ul className={styles.piste}>
            {[0, 1].map((copie) =>
              clients.map((client, i) => (
                <li key={`${copie}-${i}`} aria-hidden={copie === 1 || undefined}>
                  <Image src={client.logo} alt={copie === 1 ? "" : client.nom} sizes="120px" />
                </li>
              )),
            )}
          </ul>
        </div>
      </div>

      <div className={`conteneur ${styles.apropos}`}>
        <h2 id="titre-agence" className={styles.etiquette}>
          L&apos;agence
        </h2>
        <div data-apparait style={{ "--delai": "0.2s" } as React.CSSProperties}>
          <p className={styles.manifeste}>{manifeste}</p>
          <ul className={styles.chiffres}>
            {chiffres.map((c) => {
              const { n, suffixe } = decouper(c.valeur);
              return (
                <li key={c.libelle}>
                  <span className={styles.valeur}>
                    <Compteur valeur={n} suffixe={suffixe} />
                  </span>
                  <span className={styles.libelle}>{c.libelle}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
