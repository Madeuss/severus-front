module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'nativewind/babel',
      'react-native-reanimated/plugin', // E este deve vir depois
      'module:react-native-dotenv',
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@': './src',
          },
        },
      ],
    ],
  }
}
