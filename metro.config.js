const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: [
      'db',
      'mp3',
      'png',
      'jpg',
      'jpeg',
      'gif',
      'ttf',
      'otf',
      'mp4',
      'webm',
      'txt',
      'xml',
      'json',
    ].filter((ext) => ext !== 'svg'),
    sourceExts: ['js', 'json', 'ts', 'tsx', 'jsx', 'svg'], // Agrega 'svg' aquí
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
