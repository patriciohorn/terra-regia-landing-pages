// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { storyblok } from "@storyblok/astro";
import { loadEnv } from "vite";
import mkcert from "vite-plugin-mkcert";

const env = loadEnv("", process.cwd(), "STORYBLOK");

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss(), mkcert()],
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: "HelveticaNowDisplay",
      cssVariable: "--font-helvetica-now",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/HelveticaNowDisplay-Regular.woff2"],
            weight: "400",
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/HelveticaNowDisplay-Medium.woff2"],
            weight: "500",
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/HelveticaNowDisplay-Bold.woff2"],
            weight: "700",
            style: "normal",
          },
        ],
      },
    },
  ],
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        page: "components/storyblok/Page",
        hero: "components/storyblok/Hero",
        banner: "components/storyblok/Banner",
        promoSection: "components/storyblok/PromoSection",
        highlightsProject: "components/storyblok/HighlightsProject",
        highlightItem: "components/storyblok/HighlightItem",
        amenidades: "components/storyblok/Amenidades",
        projectOverview: "components/storyblok/ProjectOverview",
        stats: "components/storyblok/Stats",
        statItem: "components/storyblok/StatItem",
        ubicacion: "components/storyblok/UbicacionSection",
        nearbyCategory: "components/storyblok/NearbyCategory",
        nearbyPlaces: "components/storyblok/NearbyPlaces",
        disponibilidad: "components/storyblok/Disponibilidad",
        navigation: "components/storyblok/Navigation",
        call_to_action: "components/storyblok/CTA",
        footer: "components/storyblok/Footer",
      },

      apiOptions: {
        // Choose your Storyblok space region
        region: "eu", // optional,  or 'eu' (default)
      },
    }),
  ],
});
