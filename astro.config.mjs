import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://example.com",
  base: "/",
  integrations: [tailwind()],
  output: "static",
  build: {
    format: "file",
  },
});
