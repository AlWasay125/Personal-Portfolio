import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // This makes the server accessible externally (important for ngrok)
    port: 5173, // Or whatever port your Vite dev server runs on
    strictPort: true, // Optional: ensures that if the port is in use, Vite exits
    allowedHosts: [
      'bedbug-wondrous-longhorn.ngrok-free.app',
      // You can add other hosts here if needed, e.g., 'localhost', '127.0.0.1'
    ]}
});
