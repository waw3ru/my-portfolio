import { defineNuxtConfig } from "nuxt";
import _app from "./_app";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  vite: {
    server: {
      hmr: {
        protocol: "ws",
        host: "192.168.100.137", // @note: workaround
      },
    },
  },
  typescript: {
    shim: false,
    strict: true,
  },
  css: ["@/scss/main.scss"],
  app: _app,
});
