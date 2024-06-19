import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { vitest } from "vitest";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vitest()],
  test: {
    globals: true,
    environment: "jsdom",
  },
});
