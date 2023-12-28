require('jest-preset-angular/ngcc-jest-processor');

module.exports = {
  preset: 'jest-preset-angular',
  collectCoverageFrom: [
    '/src/**/*.{js,ts}',
    '!/src/public-api.ts',
    '!/src/lib/pm.module.ts',
    '!/src/**/*.spec.{js,ts}',
    '!/src/**/*.d.ts'
  ],
  coveragePathIgnorePatterns: ['.module.ts', '.routes.ts', '.mock.ts', 'index.ts', '.shared.ts'],
  coverageDirectory: '<rootDir>/test-results/coverage',
  coverageReporters: ['lcovonly', 'json', 'html', 'cobertura', 'text', 'text-summary'],
  reporters: ['default'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$',
      isolatedModules: true
    }
  },
  moduleFileExtensions: ['ts', 'html', 'js', 'json'],
  moduleDirectories: ['node_modules', 'projects/pm/src'],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  testMatch: ['<rootDir>/src/lib/**/+(*.)+(spec).ts'],
  transform: {
    '^.+\\.(ts|js|html)$': 'jest-preset-angular'
  },
  transformIgnorePatterns: ['node_modules/(?!@popperjs|@ngx-translate|angular-gridster2|ngx-markdown|@ngneat)'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css)$': '<rootDir>/__mocks__/styleMock.js',
  }
};
