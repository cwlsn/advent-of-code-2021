module.exports = {
  transform: {
    '^.+\\.ts$': 'esbuild-jest',
    '^.+\\input$': 'jest-raw-loader',
  },
  collectCoverageFrom: ['src/**/*.ts', '!src/index.ts', '!**/*.d.ts'],
}
