import type { Metadata } from "next";
import Link from "next/link";
import { pourQui } from "@/lib/contenu";
import { Entete } from "@/components/Entete";
import { PiedDePage } from "@/components/PiedDePage";
import { TitrePage } from "@/components/blocs/TitrePage";
import carte from "@/components/blocs/CarteMetier.module.css";
import styles from "./pour-qui.module.css";

export const metadata: Metadata = {
  title: { absolute: "Pour qui — Clubs de foot, ligues, joueurs, futsal, académies | Regista" },
  description:
    "Clubs de foot amateurs à pro, ligues, districts, joueurs, entraîneurs, futsal, cécifoot, foot féminin, académies, médias : ce que Regista fait pour vous.",
};

/**
 * Une carte par famille de clients (demande de Landry du 12/11/2026, pour le
 * référencement : chacun y retrouve ses mots). Mêmes cartes que la page
 * Métiers (styles de CarteMetier : numéro, titre en capitales, survol),
 * deux par ligne sur grand écran.
 */
export default function PourQui() {
  return (
    <>
      <Entete />
      <main id="contenu">
        <TitrePage titre={pourQui.titre} texte={pourQui.intro} />

        <section className="section fond-creme" aria-label="Nos publics">
          <div className="conteneur">
            <ul className={styles.grille}>
              {pourQui.publics.map((p, i) => (
                <li key={p.id} id={p.id} className={styles.place}>
                  <article
                    className={carte.carte}
                    aria-labelledby={`titre-${p.id}`}
                    data-apparait
                    style={{ "--delai": `${0.2 + (i % 2) * 0.2}s` } as React.CSSProperties}
                  >
                    <span className={carte.numero}>{String(i + 1).padStart(2, "0")}</span>
                    <h2 id={`titre-${p.id}`} className={carte.titre}>
                      {p.titre}
                    </h2>
                    <p className={carte.texte}>{p.enjeu}</p>
                    <ul className={styles.offres}>
                      {p.offres.map((o) => (
                        <li key={o.titre}>
                          <strong>{o.titre}</strong>
                          {o.texte}
                        </li>
                      ))}
                    </ul>
                    {p.note && <p className={styles.note}>{p.note}</p>}
                    {p.realisation && (
                      <p className={styles.lien}>
                        <Link href={`/realisations/${p.realisation.slug}`}>
                          {p.realisation.libelle}
                          <svg viewBox="0 0 16 16" aria-hidden="true">
                            <path d="M4 12 12 4M5 4h7v7" fill="none" stroke="currentColor" strokeWidth="1.6" />
                          </svg>
                        </Link>
                      </p>
                    )}
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <PiedDePage question={pourQui.fin} />
    </>
  );
}
