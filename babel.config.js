module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'babel-plugin-inline-import',
      {
        extensions: ['.svg'],
      },
    ],
    ['import', {libraryName: '@ant-design/react-native'}],
    [
      'module-resolver',
      {
        extensions: [
          '.ios.js',
          '.android.js',
          '.ios.jsx',
          '.android.jsx',
          '.js',
          '.jsx',
          '.json',
          '.ts',
          '.tsx',
        ],
        root: ['.'],
        alias: {
          '@pages': './src/pages',
          '@components': './src/components',
          '@assets': './src/assets',
          '@styles': './src/styles',
          '@icons': './src/assets/icons',
          '@images': './src/assets/images',
          '@placeholders': './src/assets/images/placeholders',
          '@interfaces': './src/interfaces',
          '@constants': './src/constants',
          '@contexts': './src/contexts',
          '@layouts': './src/layouts',
          '@navigation': './src/navigation',
          '@actions': './src/actions',
          '@hooks': './src/hooks',
          '@helpers': './src/helpers',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
