import { defineConfig } from "vite";
import { resolveLabEntry } from "./labMounts.js";

function mountLabs(server) {
  server.middlewares.use((request, response, next) => {
    const entry = resolveLabEntry(request.url);
    if (entry) {
      response.writeHead(308, { Location: entry });
      response.end();
      return;
    }
    next();
  });
}

export default defineConfig({
  plugins: [{ name: "static-lab-entries", configureServer: mountLabs, configurePreviewServer: mountLabs }],
});
