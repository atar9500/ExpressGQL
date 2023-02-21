import path from 'path';

import nodeExternals from 'webpack-node-externals';
import {Configuration} from 'webpack';
import WebpackShellPluginNext from 'webpack-shell-plugin-next';
import dotenv from 'dotenv';

const OPTIONS: Record<string, {mode: string; buildFolder: string}> = {
  prod: {mode: 'prod', buildFolder: 'dist'},
  dev: {mode: 'dev', buildFolder: 'build'},
};

const getConfig = (
  env: Record<string, string>,
  argv: Record<string, string>,
): Configuration => {
  const {mode, buildFolder} = OPTIONS[env.mode || 'prod'];

  dotenv.config({
    path: path.resolve(__dirname, `.env.${mode}`),
  });

  return {
    entry: './index.ts',
    target: 'node',
    mode: argv.mode === 'production' ? 'production' : 'development',
    externals: [nodeExternals()],
    plugins: [
      new WebpackShellPluginNext({
        onBuildStart: {
          scripts: [`yarn clean:${mode}`],
          blocking: true,
          parallel: false,
        },
        onBuildEnd: {
          scripts: [`yarn watch:${mode}`],
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
        {
          test: /\.(graphql|gql)$/,
          exclude: /node_modules/,
          loader: 'graphql-tag/loader',
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
      path: path.join(__dirname, buildFolder),
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
