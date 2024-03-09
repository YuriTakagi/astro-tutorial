import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://fastidious-heliotrope-d4d36e.netlify.app/",
  integrations: [react()],
});
