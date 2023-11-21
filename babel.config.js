/*
 * @Date: 1985-10-26 16:15:00
 * @Author: Bruce Hsu
 * @Description: 
 */
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['nativewind/babel']
  };
};
