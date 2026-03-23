import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import vike from "vike/plugin";

const isSpaBuild = process.env.BUILD_TARGET === "spa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), ...(isSpaBuild ? [] : [vike()])],
});
