import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",  // Add this line
  plugins: [react()],
});

// https://vite.dev/config/
// export default defineConfig({
//   server: {
//     host: true, // This makes the server accessible from the network
//     port: 5173, // You can specify a custom port (optional)
//   },
//   plugins: [react()],
// });
