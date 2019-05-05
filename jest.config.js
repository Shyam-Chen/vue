const env = require('./env');

switch (process.env.JEST_ENV) {
  case 'app':
    module.exports = {
      coveragePathIgnorePatterns: [
        '/node_modules/',
        '/tools/',
      ],
      moduleFileExtensions: ['js', 'vue'],
      moduleNameMapper: {
        '~(.*)': '<rootDir>/src$1',
      },
      setupTestFrameworkScriptFile: '<rootDir>/tools/setup-app.js',
      snapshotSerializers: [
        '<rootDir>/node_modules/jest-serializer-vue',
      ],
      testPathIgnorePatterns: [
        '<rootDir>/node_modules/',
        '.*\\.e2e-spec.js$',
      ],
      testURL: `http://${env.HOST_NAME}/`,
      transform: {
        '^.+\\.js$': 'babel-jest',
        '^.+\\.vue$': 'vue-jest',
        '^[./a-zA-Z0-9$_-]+\\.(bmp|gif|jpg|jpeg|png|psd|svg|webp)$': '<rootDir>/tools/assets-transform.js',
      },
    };
    break;

  case 'e2e':
    module.exports = {
      setupTestFrameworkScriptFile: '<rootDir>/tools/setup-e2e.js',
      testPathIgnorePatterns: [
        '<rootDir>/node_modules/',
        '.*\\.spec.js$',
      ],
      testURL: `http://${env.HOST_NAME}/`,
      transform: {
        '^.+\\.js$': 'babel-jest',
      },
    };
    break;

  default:
    module.exports = {};
}
