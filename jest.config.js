module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts', '!src/Schemable.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: 'test/(.*).ts',
  moduleFileExtensions: ['ts', 'js'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  modulePathIgnorePatterns: [
    '2.1.x/helpers.ts',
    'util.ts'
  ]
}
