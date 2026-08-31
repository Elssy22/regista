import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import styles from "./Footer.module.css";

export default function Footer() {
  const { contact, legal, reseaux } = siteConfig;

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.logoRow}>
          <Image
            src="/logo-footer.png"
            alt="Regista"
            width={2000}
            height={2000}
            className={styles.logo}
          />
        </div>

        <div className={styles.middle}>
          <div className={styles.col}>
            <span className={styles.strong}>{legal.raisonSociale}</span>
            <span className={styles.muted}>Siren - {legal.siren}</span>
            <span className={styles.muted}>
              {legal.adresse.map((ligne, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {ligne}
                </span>
              ))}
            </span>
          </div>

          <div className={styles.separator} aria-hidden="true" />

          <div className={`${styles.col} ${styles.colRight}`}>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            {contact.telephoneLien && contact.telephoneAffiche && (
              <a href={contact.telephoneLien} className={styles.muted}>
                {contact.telephoneAffiche}
              </a>
            )}
            {(reseaux.linkedin || reseaux.instagram) && (
              <div className={styles.social}>
                {reseaux.linkedin && (
                  <a
                    href={reseaux.linkedin}
                    aria-label="LinkedIn"
                    className={styles.socialLink}
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.6c0-1.34-.03-3.07-1.95-3.07-1.95 0-2.25 1.46-2.25 2.97V21h-4V9z" />
                    </svg>
                  </a>
                )}
                {reseaux.instagram && (
                  <a
                    href={reseaux.instagram}
                    aria-label="Instagram"
                    className={styles.socialLink}
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.42.56.22.96.48 1.38.9.42.42.68.82.9 1.38.17.42.37 1.06.42 2.23.06 1.25.07 1.62.07 4.8s0 3.55-.07 4.8c-.05 1.17-.25 1.8-.42 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.17-1.06.37-2.23.42-1.25.06-1.62.07-4.85.07s-3.6 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.42a3.8 3.8 0 0 1-1.38-.9 3.8 3.8 0 0 1-.9-1.38c-.17-.42-.37-1.06-.42-2.23C2.21 15.55 2.2 15.18 2.2 12s0-3.55.07-4.8c.05-1.17.25-1.8.42-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.17 1.06-.37 2.23-.42C8.45 2.21 8.82 2.2 12 2.2zm0 1.8c-3.14 0-3.5.01-4.73.07-.9.04-1.39.19-1.72.32-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.13.33-.28.82-.32 1.72C3.42 8.5 3.4 8.86 3.4 12s.02 3.5.08 4.73c.04.9.19 1.39.32 1.72.17.43.37.74.69 1.06.32.32.63.52 1.06.69.33.13.82.28 1.72.32 1.23.06 1.59.08 4.73.08s3.5-.02 4.73-.08c.9-.04 1.39-.19 1.72-.32.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.13-.33.28-.82.32-1.72.06-1.23.08-1.59.08-4.73s-.02-3.5-.08-4.73c-.04-.9-.19-1.39-.32-1.72a2.9 2.9 0 0 0-.69-1.06 2.9 2.9 0 0 0-1.06-.69c-.33-.13-.82-.28-1.72-.32C15.5 4.01 15.14 4 12 4zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8zm0 1.8a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2zm5.1-3.05a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3z" />
                    </svg>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        <div className={styles.legal}>
          <Link href={legal.mentionsLegalesUrl}>Mentions légales</Link>
          <span className={styles.legalSep}> · </span>
          <Link href={legal.politiqueConfidentialiteUrl}>
            Politique de confidentialité
          </Link>
        </div>
      </div>
    </footer>
  );
}
