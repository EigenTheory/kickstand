module.exports = {
  collectCoverage: false,
  coveragePathIgnorePatterns: [
    'node_modules',
    '<rootDir>/src/app/main.ts',
    'tests/jest-mocks.ts',
    'tests/jest-setup.ts',
  ],
  coverageReporters: ["html"],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
    './src/app/**/*.ts': {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  testPathIgnorePatterns: [
    '<rootDir>/e2e',
    '<rootDir>/dist',
    '<rootDir>/projects',
  ],
  moduleNameMapper: {
    '@app/(.*)$': '<rootDir>/src/app/$1',
  },
  resolver: '@nrwl/jest/plugins/resolver',
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest',
  },
};
