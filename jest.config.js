/* eslint-disable no-undef */
module.exports = {
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy',
  },
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?': 'ts-jest',
  },
  verbose: false,
};
