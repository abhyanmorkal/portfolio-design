// import { defineConfig } from "astro/config";

// // https://astro.build/config
// export default defineConfig({});
import { defineConfig } from "astro/config";

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        format: "esm",
      },
    },
  },
  image: {
    domains: ["astro.build"],
  },
});
