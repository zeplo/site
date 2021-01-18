module.exports = {
  presets: [
    require.resolve('@docusaurus/core/lib/babel/preset'),
    '@emotion/babel-preset-css-prop',
  ],
  plugins: [
    '@babel/plugin-transform-react-display-name',
    '@emotion',
    'babel-plugin-lodash',
    [
      'module-resolver',
      {
        alias: {
          test: './test',
          '#': ['src'],
        },
        extensions: [
          '.js',
          '.jsx',
          '.es',
          '.es6',
          '.mjs',
          '.ts',
          '.tsx',
        ],
        stripExtensions: [
          '.js',
          '.jsx',
          '.es',
          '.es6',
          '.mjs',
          '.ts',
          '.tsx',
        ],
      },
    ],
  ],
}
