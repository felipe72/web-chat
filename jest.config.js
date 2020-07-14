module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
  collectCoverageFrom: ['src/**/*.{js,jsx,vue}'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|svg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^~components/(.*)$': '<rootDir>/src/components/$1',
  },
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/tests/'],
};
