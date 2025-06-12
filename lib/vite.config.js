import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "./src/index.js"),
      name: "Plucker",
      fileName: "pluck",
      formats: ["es", "umd"], // this is important!
    },
    rollupOptions: {
      // Optional: mark dependencies as external to avoid bundling
      external: [],
    },
    outDir: "dist",
  },
});
