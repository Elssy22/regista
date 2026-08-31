"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./CalendlyInline.module.css";

const SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";

type CalendlyGlobal = {
  initInlineWidget: (options: {
    url: string;
    parentElement: HTMLElement;
  }) => void;
};

declare global {
  interface Window {
    Calendly?: CalendlyGlobal;
  }
}

type CalendlyInlineProps = {
  url: string;
};

/**
 * Widget Calendly intégré en ligne — chargé UNIQUEMENT après un clic explicite
 * de l'utilisateur (« Afficher le calendrier »). Tant qu'il n'a pas cliqué, aucun
 * script tiers ni cookie Calendly n'est chargé : le clic vaut consentement (RGPD).
 */
export default function CalendlyInline({ url }: CalendlyInlineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) return;
    let cancelled = false;

    const init = () => {
      const el = ref.current;
      if (cancelled || !el || el.children.length) return;
      if (window.Calendly?.initInlineWidget) {
        window.Calendly.initInlineWidget({ url, parentElement: el });
      }
    };

    // Charge le script Calendly une seule fois, après consentement.
    let script = document.querySelector<HTMLScriptElement>(
      `script[src="${SCRIPT_SRC}"]`,
    );
    if (!script) {
      script = document.createElement("script");
      script.src = SCRIPT_SRC;
      script.async = true;
      document.body.appendChild(script);
    }

    init();

    let tries = 0;
    const timer = window.setInterval(() => {
      tries += 1;
      if (window.Calendly?.initInlineWidget) {
        init();
        window.clearInterval(timer);
      } else if (tries > 60) {
        window.clearInterval(timer);
      }
    }, 250);

    return () => {
      cancelled = true;
      window.clearInterval(timer);
    };
  }, [loaded, url]);

  if (!loaded) {
    return (
      <div className={styles.placeholder}>
        <p className={styles.placeholderText}>
          Réservez votre appel de 20&nbsp;minutes.
        </p>
        <button
          type="button"
          className={styles.loadButton}
          onClick={() => setLoaded(true)}
        >
          Afficher le calendrier
        </button>
        <p className={styles.note}>
          En cliquant, vous chargez le module de réservation Calendly, susceptible
          de déposer des cookies sur votre appareil.
        </p>
      </div>
    );
  }

  return <div ref={ref} className={styles.widget} data-url={url} />;
}
