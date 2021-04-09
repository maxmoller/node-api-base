module.exports = {
  roots: ['<rootDir>/srv'],
  collectCoverageFrom: ['<rootDir>/srv/**/*.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
