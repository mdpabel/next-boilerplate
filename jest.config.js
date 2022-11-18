const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

const config = {
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  testEnvironment: 'jest-environment-jsdom',
  verbose: true,
  // collectCoverage: true,
  // coverageDirectory: 'coverage',
  // coverageThreshold: {
  //   global: {
  //     branches: 100,
  //     functions: 100,
  //     lines: 100,
  //     statements: 100,
  //   },
  // },
  testPathIgnorePatterns: ['/node_modules/*', '/cypress/*'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleDirectories: ['node_modules', '<rootDir>/', 'src/helpers', __dirname],
  moduleNameMapper: {
    '^@\\/(.*)$': '<rootDir>/src/$1',
  },
}

module.exports = createJestConfig(config)
