import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  site: "https://markorusic.com",
  integrations: [
    expressiveCode({ themes: ["vitesse-dark"] }),
    mdx(),
    sitemap(),
    tailwind(),
  ],
});
