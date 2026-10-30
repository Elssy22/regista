import { NextStudio } from "next-sanity/studio";
import config from "@/sanity/config";
import { sanityRelie } from "@/sanity/env";

export { metadata, viewport } from "next-sanity/studio";
export const dynamic = "force-static";

/** Le back office du blog : regista-a.com/studio */
export default function Studio() {
  if (!sanityRelie) {
    return (
      <main style={{ maxWidth: 560, margin: "15vh auto", padding: 24, fontFamily: "system-ui, sans-serif", lineHeight: 1.6 }}>
        <h1 style={{ fontSize: 24 }}>Back office pas encore relié</h1>
        <p>
          Il manque l&apos;identifiant du projet Sanity (variable <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code> sur
          Vercel). Une fois renseigné, le back office s&apos;affichera ici.
        </p>
      </main>
    );
  }
  return <NextStudio config={config} />;
}
