module.exports = {
  transform: {
    '\\.jsx?$': 'babel-jest',
  },
  // Test match mask
  testMatch: ['<rootDir>/src/**/?(*.)test.js?(x)'],
  // Different handlers for file extensions
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/resources/jest/resource-mock.js',
    '\\.(css|scss)$': '<rootDir>/resources/jest/resource-mock.js',
  },
  // This custom js module is used to set up things before jest runs tests, e.g. provide enzyme tools into tests
  setupFiles: ['<rootDir>/resources/jest/setup.js'],
  // Providing custom snapshot serializer for most comfortable use
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
  modulePaths: ['<rootDir>/'],
  // Cache settings: we force jest storing it's cache inside project to simplify cleaning
  cacheDirectory: '<rootDir>/.etmp',
  // Coverage settings
  coverageDirectory: '<rootDir>/reports/coverage',
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/src/components/icons',
    'test-data',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
