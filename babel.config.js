module.exports = function (api) {
  api.cache(true)
  const plugins = [['module:react-native-dotenv']]

  plugins.push('nativewind/babel')

  return {
    presets: ['babel-preset-expo'],
    plugins,
  }
}
