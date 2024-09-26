import { defineConfig } from 'cypress';
import fs from 'fs';

export default defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.test.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:3000',

    setupNodeEvents(on, config) {
      config.reporter = 'cypress-multi-reporters';
      config.reporterOptions = {
        reporterEnabled: 'mochawesome',
        mochawesomeReporterOptions: {
          reportDir: 'cypress/reports',
          overwrite: false,
          html: true,
          json: true,
        },
      };

      on('after:spec', (_, results) => {
        if (results && results.stats.failures === 0) {
          fs.rmdirSync('cypress/reports', { recursive: true });
        }
      });

      return config;
    },
  },
});
