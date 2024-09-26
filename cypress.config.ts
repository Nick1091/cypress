import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    // Указываем путь к тестам
    specPattern: 'cypress/e2e/**/*.test.{js,jsx,ts,tsx}',
    // Другие параметры конфигурации...
    baseUrl: 'http://localhost:3000',
  },
});
