<<<<<<< HEAD

=======
>>>>>>> 2159ef1c79b15ebe65f713f30fc425982661d7c2
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
<<<<<<< HEAD
import { nodePolyfills } from 'vite-plugin-node-polyfills';

=======
>>>>>>> 2159ef1c79b15ebe65f713f30fc425982661d7c2

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// https://vitejs.dev/config/
export default defineConfig({
<<<<<<< HEAD
  plugins: [
    react(),
    nodePolyfills({
      // To exclude specific polyfills, add them to this list.
      exclude: [
        'fs', // Excludes the polyfill for `fs` and `node:fs`.
      ],
      // Whether to polyfill `node:` protocol imports.
      protocolImports: true,
    }),
  ],
=======
  plugins: [react()],
>>>>>>> 2159ef1c79b15ebe65f713f30fc425982661d7c2
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  define: {
    // This is required for the wallet adapter and other Solana libraries.
    'process.env.BROWSER': true,
<<<<<<< HEAD
=======
    'global': {},
>>>>>>> 2159ef1c79b15ebe65f713f30fc425982661d7c2
  },
});