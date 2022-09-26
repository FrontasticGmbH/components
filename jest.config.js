const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

module.exports = createJestConfig({
  moduleDirectories: [
    "node_modules",
    __dirname
  ],
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/pages/(.*)$': '<rootDir>/pages/$1',
  },
  moduleFileExtensions: [
    "js",
    "ts",
    "jsx",
    "tsx",
    "json",
    "node"
  ],
  roots: [
    "./"
  ],
  setupFilesAfterEnv: ['./__test__/jest.setup.tsx'],
  testEnvironment: "jest-environment-jsdom",
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  testPathIgnorePatterns: [
    "\\\\node_modules\\\\"
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  }
});
