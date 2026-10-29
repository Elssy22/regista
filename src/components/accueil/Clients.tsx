import Image from "next/image";
import { clients } from "@/lib/contenu";
import styles from "./Clients.module.css";

/**
 * Le bandeau défilant des clients (« Company I worked with » du template).
 * La liste est doublée pour boucler sans saut ; la copie est cachée aux
 * lecteurs d'écran. Avec « réduire les animations », le bandeau s'arrête
 * et les logos passent à la ligne.
 */
export function Clients() {
  return (
    <section className={`fond-creme ${styles.clients}`} aria-labelledby="titre-clients">
      <h2 id="titre-clients" className={styles.titre}>
        Ils nous font confiance
      </h2>
      <div className={styles.piste}>
        {[0, 1].map((copie) => (
          <ul key={copie} className={styles.liste} aria-hidden={copie === 1 || undefined}>
            {clients.map((client, i) => (
              <li key={i}>
                <Image
                  src={client.logo}
                  alt={copie === 1 ? "" : client.nom}
                  sizes="160px"
                  className={styles.logo}
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
