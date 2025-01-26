import { defineConfig, ViteUserConfig } from 'vitest/config'

export default defineConfig(async (): Promise<ViteUserConfig> => {
  const tsconfigPaths = await import('vite-tsconfig-paths').then(
    (mod) => mod.default,
  )
  return {
    plugins: [tsconfigPaths()],
    test: {
      environmentMatchGlobs: [['src/http/controllers/**', 'prisma']],
    },
  }
})
