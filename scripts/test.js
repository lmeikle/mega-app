'use strict';

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'test';
process.env.NODE_ENV = 'test';
process.env.PUBLIC_URL = '';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

// Ensure environment variables are read.
require('../config/env');

const jest = require('jest');
let argv = process.argv.slice(2);

// Watch unless on CI or in coverage mode
//if (!process.env.CI && argv.indexOf('--coverage') < 0) {
//  argv.push('--watch');
//}

if (argv.indexOf('--coverage') >= 0 || argv.indexOf('--all') >= 0) {
  // will run all tests
  process.env.NODE_ENV = 'test';
} else if (argv.indexOf('--e2edebug') >= 0) {
  // runs tests on changed files only, headless = false
  argv.push('--watch');
  process.env.NODE_ENV = 'debug';
} else {
  argv.push('--watch'); // only runs tests on changed files
  process.env.NODE_ENV = 'test';
}

//argv.push('--runInBand');
//process.env.NODE_ENV = 'debug';

jest.run(argv);
