import type { Config } from 'jest'
import nextJest from 'next/jest.js'

// Crie a configuração específica do Next.js usando nextJest
const createJestConfig = nextJest({
  // Forneça o caminho para o seu aplicativo Next.js para carregar next.config.js e arquivos .env no ambiente de teste
  dir: './'
})

// Adicione quaisquer configurações personalizadas a serem passadas para o Jest
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  testPathIgnorePatterns: ['/node_modules/', '/build/'],
  moduleNameMapper: {
    '\\.(scss|css)$': 'identity-obj-proxy'
  },
  transformIgnorePatterns: ['/node_modules/', '\\.pnp\\.[^\\/]+$'],
  snapshotSerializers: ['@emotion/jest/serializer'],
  reporters: ['default', 'jest-junit'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.test.{js,jsx,ts,tsx}'
  ],
  coverageReporters: ['text', 'html'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  watchPathIgnorePatterns: ['/node_modules/', '/build/'],
  watchman: true
}

// Mescla a configuração padrão do Jest com a configuração específica do Next.js
const mergedConfig = createJestConfig(config)

// Exporta a configuração mesclada
export default mergedConfig
