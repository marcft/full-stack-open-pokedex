import { defineConfig } from '@playwright/test'
export default defineConfig({
  testDir: './e2e-tests',
  webServer: {
    command: 'npm run start',
    url: 'http://127.0.0.1:3000',
    timeout: 120 * 1000,
  },
  use: {
    baseURL: 'http://localhost:3000/',
  },
})
