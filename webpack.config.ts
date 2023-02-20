import path from 'path';
import nodeExternals from 'webpack-node-externals';
import {Configuration} from 'webpack';
import WebpackShellPluginNext from 'webpack-shell-plugin-next';

const getConfig = (
  env: Record<string, string>,
  argv: Record<string, string>,
): Configuration => {
  require('dotenv').config({
    path: path.resolve(__dirname, `.env.${env.mode}.local`),
  });

  return {
    entry: './src/index.ts',
    target: 'node',
    mode: argv.mode === 'production' ? 'production' : 'development',
    externals: [nodeExternals()],
    plugins: [
      new WebpackShellPluginNext({
        onBuildStart: {
          scripts: ['npm run clean:dev && npm run clean:prod'],
          blocking: true,
          parallel: false,
        },
        onBuildEnd: {
          scripts: ['npm run dev'],
          blocking: false,
          parallel: true,
        },
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(ts|js)$/,
          loader: 'ts-loader',
          options: {},
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.js'],
      alias: {
        '~': path.resolve(__dirname, 'src'),
      },
    },
    output: {
      path: path.join(__dirname, 'build'),
      filename: 'index.js',
    },
    optimization: {
      moduleIds: 'deterministic',
      splitChunks: {
        chunks: 'all',
      },
    },
  };
};

export default getConfig;
