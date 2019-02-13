module.exports = {
  setupFilesAfterEnv: [
    'react-testing-library/cleanup-after-each',
    'fetch-mock',
  ],
  moduleNameMapper: {
    '^src/(.*)': '<rootDir>/src/$1.js',
  },
};
