const path = require('path')

const { config } = require('@swc/core/spack')

module.exports = config({
  entry: {
    index: path.join(__dirname, 'src', 'index.js'),
  },
  output: {
    path: path.join(__dirname, 'bundle'),
  },
  options: {
    sourceMaps: false,
  },
})
