module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/styleMock.js"
  }
};