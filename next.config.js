const { parse } = require('url');
const { homepage } = require('./package.json');

module.exports = {
  basePath: parse(homepage).pathname,
};
