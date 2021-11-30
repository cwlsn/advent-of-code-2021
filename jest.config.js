module.exports = {
  transform: {
    '^.+\\.ts$': 'esbuild-jest',
  },
  collectCoverageFrom: ['src/**/*.ts', '!src/index.ts', '!**/*.d.ts'],
}
