import Image from "next/image";
import { chiffres, clients, manifeste } from "@/lib/contenu";
import { Compteur } from "../effets/Compteur";
import styles from "./Agence.module.css";

/**
 * Préfixe, valeur numérique et suffixe d'un chiffre :
 * « +1 500 » → « + », 1500, « » ; « 24 h » → « », 24, « h ».
 */
function decouper(valeur: string) {
  const m = valeur.match(/^(\D*?)(\d[\d\s\u202f\u00a0]*\d|\d)(.*)$/);
  return m
    ? { prefixe: m[1], n: Number(m[2].replace(/\D/g, "")), suffixe: m[3] }
    : { prefixe: "", n: 0, suffixe: valeur };
}

/**
 * Le bloc sombre du template : le bandeau de logos qui défile, puis
 * « À propos » avec les chiffres qui défilent de 0 à leur valeur.
 */
export function Agence() {
  return (
    <section id="agence" className={`fond-bleu ${styles.agence}`} aria-labelledby="titre-agence">
      <div className={styles.clients}>
        {/* Titre retiré à l'écran (demande de Landry), gardé pour les lecteurs d'écran. */}
        <h2 className="visuellement-cache">Ils nous font confiance</h2>
        <div className={styles.defilant}>
          <ul className={styles.piste}>
            {[0, 1].map((copie) =>
              clients.map((client, i) => (
                <li key={`${copie}-${i}`} aria-hidden={copie === 1 || undefined}>
                  <Image src={client.logo} alt={copie === 1 ? "" : client.nom} sizes="280px" />
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
              const { prefixe, n, suffixe } = decouper(c.valeur);
              return (
                <li key={c.libelle}>
                  <span className={styles.valeur}>
                    <Compteur valeur={n} prefixe={prefixe} suffixe={suffixe} />
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
