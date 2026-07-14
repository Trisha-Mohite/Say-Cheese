import { mkdir, writeFile } from "node:fs/promises";

// Sites serves the completed Vite assets through this minimal Worker entrypoint.
// The application itself remains the static build generated in dist/.
await mkdir("dist/server", { recursive: true });
await writeFile(
  "dist/server/index.js",
  `export default {\n  async fetch(request, env) {\n    return env.ASSETS.fetch(request);\n  },\n};\n`,
);
