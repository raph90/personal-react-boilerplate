const path = require('path');
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  webpackFinal: (config) => {
    const finalConfig = {
      ...config,
      resolve: {
        ...config.resolve,
      },
      module: {
        ...config.module,
        rules: [
          ...config.module.rules,
          {
            loader: 'babel-loader',
            exclude: /node_modules/,
            test: /\.(js|jsx|ts|tsx)$/,
            options: {
              presets: ['@babel/react'],
              plugins: [
                [
                  'import',
                  {
                    libraryName: 'antd',
                    libraryDirectory: 'es',
                    style: true,
                  },
                ],
              ],
            },
          },
          {
            test: /\.less$/i,
            include: [path.resolve(__dirname, '../src')],
            use: [
              {
                loader: 'style-loader',
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                  modules: {
                    auto: /\.module\.\w+$/i,
                    mode: 'local',
                    localIdentName: '[path][name]__[local]--[hash:base64:5]',
                  },
                },
              },
              {
                loader: 'less-loader',
                options: {
                  lessOptions: {
                    javascriptEnabled: true,
                  },
                },
              },
            ],
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
        ],
      },
    };
    console.log(finalConfig.module.rules);
    return finalConfig;
  },
};
