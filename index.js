const IS_NODE_SEVEN = process.version.charAt(1) === '7';
const HAS_HARMONY_FLAG = process.execArgv.includes('--harmony');

const plugins = [
  require('babel-plugin-external-helpers'),
  require('babel-plugin-transform-class-properties'),
  require('babel-plugin-transform-es2015-destructuring'),
  require('babel-plugin-transform-es2015-parameters'),
  require('babel-plugin-transform-es2015-spread'),
  require('babel-plugin-transform-exponentiation-operator'),
  require('babel-plugin-transform-object-rest-spread'),
  require('babel-plugin-transform-flow-strip-types')
];

if (!IS_NODE_SEVEN || !HAS_HARMONY_FLAG) {
  plugins.push(require('babel-plugin-transform-async-to-generator'));
}

module.exports = {
  plugins: plugins
};
