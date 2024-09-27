import { defineConfig, envField } from "astro/config";

export default defineConfig({
  experimental: {
    env: {
      schema: {
        OAUTH_GITHUB_CLIENT_ID: envField.string({ context: "server", access: "secret" }),
        OAUTH_GITHUB_CLIENT_SECRET: envField.string({ context: "server", access: "secret" }),
      },
    },
  },
});
