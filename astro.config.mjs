import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://markorusic-com-v2.vercel.app",
  integrations: [mdx(), sitemap(), tailwind()],
});
