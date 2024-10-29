module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@api': './src/app/api',
          '@assets': './src/app/assets',
          '@components': './src/app/components',
          '@contexts': './src/app/contexts',
          '@routes': './src/app/routes',
          '@utils': './src/app/utils',
          '@views': './src/app/views',
        },
      },
    ],
  ],
};
