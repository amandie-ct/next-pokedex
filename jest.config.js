module.exports = {
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['/nodemodules/', '/.next/'],
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.ts(x)?', '!src/app/**', '!src/lib/registry.tsx', '!src/styles'],
    setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
    modulePaths: ['<rootDir>/src/'],
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
    },
    moduleNameMapper: {
      '^styled-components':
      'styled-components/dist/styled-components.browser.cjs.js',
      "^@/(.*)$": "<rootDir>/src/$1"
    }
  }
