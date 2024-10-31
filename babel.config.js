module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin', // Added separately as it does not require options
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@api': './src/app/api',
          '@assets': './src/app/assets',
          '@components': './src/app/components',
          '@context': './src/app/context',
          '@navigators': './src/app/navigators',
          '@utils': './src/app/utils',
          '@views': './src/app/views',
        },
      },
    ],
  ],
};
