import type { Metadata } from "next";
import Link from "next/link";
import { pourQui } from "@/lib/contenu";
import { Entete } from "@/components/Entete";
import { PiedDePage } from "@/components/PiedDePage";
import { TitrePage } from "@/components/blocs/TitrePage";
import styles from "./pour-qui.module.css";

export const metadata: Metadata = {
  title: { absolute: "Pour qui — Clubs de foot, ligues, joueurs, futsal, académies | Regista" },
  description:
    "Clubs de foot amateurs à pro, ligues, districts, joueurs, entraîneurs, futsal, cécifoot, foot féminin, académies, médias : ce que Regista fait pour vous.",
};

/**
 * Une section par famille de clients (demande de Landry du 12/11/2026,
 * pour le référencement : chacun y retrouve ses mots). À gauche le public
 * et son enjeu, à droite ce que fait Regista.
 */
export default function PourQui() {
  return (
    <>
      <Entete />
      <main id="contenu">
        <TitrePage titre={pourQui.titre} texte={pourQui.intro} />

        <section className="section fond-creme" aria-label="Nos publics" style={{ paddingTop: 20 }}>
          <div className="conteneur">
            {pourQui.publics.map((p) => (
              <article key={p.id} id={p.id} className={styles.public} aria-labelledby={`titre-${p.id}`}>
                <div className={styles.gauche} data-apparait style={{ "--delai": "0.2s" } as React.CSSProperties}>
                  <h2 id={`titre-${p.id}`} className={styles.titre}>
                    {p.titre}
                  </h2>
                  <p className={styles.enjeu}>{p.enjeu}</p>
                </div>
                <div className={styles.droite} data-apparait style={{ "--delai": "0.4s" } as React.CSSProperties}>
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
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <PiedDePage question={pourQui.fin} />
    </>
  );
}
