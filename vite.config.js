// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// WICHTIG: Der "base"-Pfad entspricht deinem GitHub Repo-Namen!
export default defineConfig({
  base: '/Keeper',
  plugins: [react()],
});
