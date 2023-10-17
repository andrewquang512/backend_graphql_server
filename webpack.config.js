// import path from 'path';
// import { fileURLToPath } from 'url';
// import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';
//
// const __dirname = path.dirname(fileURLToPath(import.meta.url));
//
// export default {
//   entry: './src/handler.js',
//   output: {
//     path: path.resolve(__dirname, './dist'),
//     filename: 'handler.js',
//   },
//   experiments: {
//     outputModule: true,
//   },
//   plugins: [new NodePolyfillPlugin()],
//   module: {
//     // https://webpack.js.org/loaders/babel-loader/#root
//     rules: [
//       {
//         test: /.m?js$/,
//         loader: 'babel-loader',
//         exclude: /node_modules/,
//       },
//     ],
//   },
//   resolve: {
//     fallback: {
//       fs: false,
//       async_hooks: false,
//       net: false,
//       path: false,
//       zlib: false,
//       http: false,
//       https: false,
//       stream: false,
//       crypto: false,
//     },
//   },
//   devtool: 'source-map',
// };

// webpack.config.js
export default {
  target: 'node',
  entry: './src/handler.js',
  mode: 'production',
  output: {
    filename: 'handler.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
