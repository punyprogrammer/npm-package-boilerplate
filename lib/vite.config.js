import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, "src/index.js"),
        log: resolve(__dirname, "src/log.js"),
      },
      name: "pluck",
      formats: ["es"],
      fileName: (format, name) => {
        if (format === "es") return `${name}.js`;
        return `${name}.${format}`;
      },
    },
  },
});
