"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import styles from "./Formulaire.module.css";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Champ = "nom" | "email" | "sujet" | "message";

/** Ce qui manque, dans l'ordre du formulaire, pour le message d'erreur. */
const LIBELLES: Record<Champ, string> = {
  nom: "votre nom",
  email: "une adresse e-mail valide",
  sujet: "un sujet",
  message: "votre message",
};

/**
 * Le formulaire du template. Le site n'a pas de serveur d'envoi et ne
 * stocke rien : « Envoyer » ouvre la messagerie du visiteur avec le message
 * déjà rédigé, adressé à Regista. Les messages de succès et d'erreur
 * apparaissent en fondu, comme dans le template.
 */
export function Formulaire() {
  const [etat, setEtat] = useState<"attente" | "ok" | "erreur">("attente");
  const [fautifs, setFautifs] = useState<Champ[]>([]);

  const envoyer = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const nom = String(d.get("nom") ?? "").trim();
    const email = String(d.get("email") ?? "").trim();
    const sujet = String(d.get("sujet") ?? "").trim();
    const message = String(d.get("message") ?? "").trim();
    const manquants = (
      [
        ["nom", nom.length > 1],
        ["email", EMAIL.test(email)],
        ["sujet", sujet.length > 1],
        ["message", message.length > 1],
      ] as const
    )
      .filter(([, ok]) => !ok)
      .map(([champ]) => champ);
    setFautifs(manquants);
    if (manquants.length === 0) {
      const corps = `${message}\n\n${nom}\n${email}`;
      window.location.href = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(corps)}`;
      setEtat("ok");
    } else {
      setEtat("erreur");
      // Le curseur va directement au premier champ à compléter.
      e.currentTarget.querySelector<HTMLElement>(`[name="${manquants[0]}"]`)?.focus();
    }
  };

  const fautif = (champ: Champ) =>
    fautifs.includes(champ) ? { "aria-invalid": true, "aria-describedby": "formulaire-erreur" } : {};
  const aCompleter = fautifs.map((c) => LIBELLES[c]);
  const listeErreur =
    aCompleter.length > 1 ? `${aCompleter.slice(0, -1).join(", ")} et ${aCompleter.at(-1)}` : aCompleter[0];

  return (
    <form
      className={styles.formulaire}
      onSubmit={envoyer}
      // Un champ corrigé perd sa marque d'erreur dès qu'on y écrit.
      onInput={(e) => {
        const nom = (e.target as HTMLInputElement).name as Champ;
        if (fautifs.includes(nom)) setFautifs((f) => f.filter((c) => c !== nom));
      }}
      noValidate
    >
      <div className={styles.champs}>
        <label className={styles.champ}>
          <span>Nom complet</span>
          <span className={styles.saisie}>
            <input name="nom" {...fautif("nom")} type="text" autoComplete="name" placeholder="Prénom Nom" required />
            <Icone d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0" />
          </span>
        </label>
        <label className={styles.champ}>
          <span>Adresse e-mail</span>
          <span className={styles.saisie}>
            <input name="email" {...fautif("email")} type="email" autoComplete="email" placeholder="vous@exemple.fr" required />
            <Icone d="M3 6h18v12H3zM3 6l9 7 9-7" />
          </span>
        </label>
        <label className={`${styles.champ} ${styles.large}`}>
          <span>Sujet</span>
          <span className={styles.saisie}>
            <input name="sujet" {...fautif("sujet")} type="text" placeholder="Votre sujet" required />
            <Icone d="M4 5h16v11H9l-5 4z" />
          </span>
        </label>
        <label className={`${styles.champ} ${styles.large}`}>
          <span>Votre message</span>
          <textarea name="message" {...fautif("message")} rows={4} placeholder="Écrivez votre message" required />
        </label>
      </div>
      <button type="submit" className={`bouton bouton--plein ${styles.envoyer}`}>
        Envoyer le message
        <Icone d="M5 19 19 5M8 5h11v11" />
      </button>
      <p className={`${styles.retour} ${etat === "ok" ? styles.affiche : ""}`} role="status">
        {etat === "ok" && "Votre messagerie s'ouvre avec votre message prêt à partir. Nous vous répondons sous 24 h."}
      </p>
      <p className={`${styles.retour} ${etat === "erreur" ? styles.affiche : ""}`} role="alert" id="formulaire-erreur">
        {etat === "erreur" && `Il manque ${listeErreur}.`}
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
