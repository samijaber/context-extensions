import { defineConfig } from "vite";
import createVuePlugin from "@vitejs/plugin-vue2";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [createVuePlugin()],
  server: {
    open: true,
    port: 8002,
  },
});
