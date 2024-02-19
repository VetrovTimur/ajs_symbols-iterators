module.exports = {
  entry: './src/index.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'index_bundle.js',
  },

  module: {
    rules: [],
  },
  plugins: [],
};
