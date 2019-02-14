module.exports = {
  setupFiles: ['babel-polyfill', '<rootDir>/jest/register-context.js'],
  setupFilesAfterEnv: [
    'jest-dom/extend-expect',
    'react-testing-library/cleanup-after-each',
    'fetch-mock',
  ],
  moduleNameMapper: {
    '^src/(.*)': '<rootDir>/src/$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/jest/__mocks__/fileMock.js',
  },
};
