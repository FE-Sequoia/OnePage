import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://example.com",
  base: "/OnePage",
  integrations: [tailwind()],
  output: "static",
  build: {
    format: "file",
  },
});
