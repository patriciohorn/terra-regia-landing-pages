export interface SiteMeta {
  key: string;
  name: string;
  domain: string;
  plausibleDomain: string;
}

export const sites = {
  "rincon-de-la-sierra": {
    key: "rincon-de-la-sierra",
    name: "Rincón de la Sierra",
    domain: "https://rincondelasierra.mx",
    plausibleDomain: "rincondelasierra.mx",
  },
  "alinka-residencial": {
    key: "alinka-residencial",
    name: "alinka residencial",
    domain: "https://alinkaresidencial.mx",
    plausibleDomain: "alinkaresidencial.mx",
  },
} satisfies Record<string, SiteMeta>;

export function resolveSite(): SiteMeta {
  const key = import.meta.env.SITE_KEY;
  import.meta.env.SITE_KEY;

  if (!key) {
    throw new Error(
      "SITE_KEY is not set. Add it to .env locally, or to the environment variables of this deploy.",
    );
  }

  const site = sites[key as keyof typeof sites];

  if (!site) {
    throw new Error(
      `SITE_KEY "${key}" is not registered in src/config/sites.ts. Known keys: ${Object.keys(sites).join(", ")}`,
    );
  }

  return site;
}
