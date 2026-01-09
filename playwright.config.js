const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 68000,

  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10000,
    ignoreHTTPSErrors: true,

    screenshot: 'on', 
    video: 'on',      
    trace: 'on'       
  },

  reporter: [
    ['list'],
    ['html', { open: 'never' }]
  ],
});
