"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import styles from "./Formulaire.module.css";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Le formulaire du template. Le site n'a pas de serveur d'envoi et ne
 * stocke rien : « Envoyer » ouvre la messagerie du visiteur avec le message
 * déjà rédigé, adressé à Regista. Les messages de succès et d'erreur
 * apparaissent en fondu, comme dans le template.
 */
export function Formulaire() {
  const [etat, setEtat] = useState<"attente" | "ok" | "erreur">("attente");

  const envoyer = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const nom = String(d.get("nom") ?? "").trim();
    const email = String(d.get("email") ?? "").trim();
    const sujet = String(d.get("sujet") ?? "").trim();
    const message = String(d.get("message") ?? "").trim();
    if (nom.length > 1 && EMAIL.test(email) && sujet.length > 1 && message.length > 1) {
      const corps = `${message}\n\n${nom}\n${email}`;
      window.location.href = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(corps)}`;
      setEtat("ok");
    } else {
      setEtat("erreur");
    }
  };

  return (
    <form className={styles.formulaire} onSubmit={envoyer} noValidate>
      <div className={styles.champs}>
        <label className={styles.champ}>
          <span>Nom complet</span>
          <span className={styles.saisie}>
            <input name="nom" type="text" autoComplete="name" placeholder="Prénom Nom" required />
            <Icone d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0" />
          </span>
        </label>
        <label className={styles.champ}>
          <span>Adresse e-mail</span>
          <span className={styles.saisie}>
            <input name="email" type="email" autoComplete="email" placeholder="vous@exemple.fr" required />
            <Icone d="M3 6h18v12H3zM3 6l9 7 9-7" />
          </span>
        </label>
        <label className={`${styles.champ} ${styles.large}`}>
          <span>Sujet</span>
          <span className={styles.saisie}>
            <input name="sujet" type="text" placeholder="Votre sujet" required />
            <Icone d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0" />
          </span>
        </label>
        <label className={`${styles.champ} ${styles.large}`}>
          <span>Votre message</span>
          <textarea name="message" rows={4} placeholder="Écrivez votre message" required />
        </label>
      </div>
      <button type="submit" className={`bouton bouton--plein ${styles.envoyer}`}>
        Envoyer le message
        <Icone d="M3 6h18v12H3zM3 6l9 7 9-7" />
      </button>
      <p className={`${styles.retour} ${etat === "ok" ? styles.affiche : ""}`} role="status">
        {etat === "ok" && "Votre messagerie s'ouvre avec votre message prêt à partir. Nous vous répondons sous 24 h."}
      </p>
      <p className={`${styles.retour} ${etat === "erreur" ? styles.affiche : ""}`} role="alert">
        {etat === "erreur" && "Merci de remplir tous les champs, avec une adresse e-mail valide."}
      </p>
    </form>
  );
}

function Icone({ d }: { d: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={d} fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
