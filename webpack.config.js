import nodeExternals from 'webpack-node-externals';
import CopyPlugin from 'copy-webpack-plugin';

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
  externals: [nodeExternals()],
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: './node_modules/.prisma/client/schema.prisma', to: './' }, // you may need to change `to` here.
      ],
    }),
  ],
};
