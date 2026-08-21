let cached: any = null;

export function setSiteConfig(config: any) {
  cached = config;
}

export function getSiteConfig() {
  if (!cached) {
    throw new Error(
      "Site config accessed before it was loaded. Call setSiteConfig() in the page.",
    );
  }
  return cached;
}
