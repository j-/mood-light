const { parse } = require('url');
const { homepage } = require('./package.json');

const { pathname } = parse(homepage);

module.exports = {
  assetPrefix: pathname,
  basePath: pathname,
};
