import { defineConfig, mergeConfig } from 'vitest/config'

import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      watch: false,
      environment: 'happy-dom',
      setupFiles: './src/setup-test.ts',
    },
  }),
)
