/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    setupFiles: ["./.jest/setEnvVars.js"],
    coveragePathIgnorePatterns: [
        "/node_modules/"
      ],
    forceExit: true,
  };