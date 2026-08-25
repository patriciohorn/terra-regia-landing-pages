export const themes = {
  "rincon-de-la-sierra": {
    brand: {
      "50": "#f3f6f3",
      "100": "#e1eae1",
      "200": "#c5d5c5",
      "300": "#9eb7a0",
      "400": "#739477",
      "500": "#4c6c51",
      "600": "#3f5c44",
      "700": "#324a37",
      "800": "#293c2d",
      "900": "#233126",
      "950": "#131b15",
    },
    accent: {
      "50": "#f7f5ef",
      "200": "#c2ae87",
      "500": "#a38555",
      "700": "#695037",
    },
  },

  "alinka-residencial": {
    brand: {
      "50": "#fcf4f4",
      "100": "#fae6e7",
      "200": "#f7d1d2",
      "300": "#f0b1b3",
      "400": "#e68386",
      "500": "#692729",
      "600": "#5f2325",
      "700": "#541f21",
      "800": "#4a1b1d",
      "900": "#3f1719",
      "950": "#351415",
    },
    accent: {
      "50": "#f7f5ef",
      "200": "#c2ae87",
      "500": "#a38555",
      "700": "#695037",
    },
  },
} as const;

export function resolveTheme(key: string) {
  const theme = themes[key as keyof typeof themes];
  if (!theme) {
    throw new Error(
      `No theme for SITE_KEY "${key}". Known: ${Object.keys(themes).join(", ")}`,
    );
  }
  return theme;
}
