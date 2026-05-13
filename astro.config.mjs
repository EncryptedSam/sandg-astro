import { defineConfig } from "astro/config";

import react from "@astrojs/react";


import tailwindcss from "@tailwindcss/vite";


export default defineConfig({
  site: "https://EncryptedSam.github.io",
  base: "/sandg-astro/",
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },
});