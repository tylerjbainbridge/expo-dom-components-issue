module.exports = function (api) {
  api.cache(true);

  const sharedPlugins = [
    // optional, only if you ever use process.env
    // [
    //   'transform-inline-environment-variables',
    //   {
    //     exclude: [
    //       'EXPO_ROUTER_APP_ROOT',
    //       'EXPO_ROUTER_PROJECT_ROOT',
    //       'EXPO_ROUTER_IMPORT_MODE',
    //       'EXPO_ROUTER_IMPORT_MODE_ANDROID',
    //       'EXPO_ROUTER_IMPORT_MODE_IOS',
    //       'EXPO_ROUTER_IMPORT_MODE_WEB',
    //     ],
    //   },
    // ],
    // NOTE: this is optional, you don't *need* the compiler
    // [
    //   '@tamagui/babel-plugin',
    //   {
    //     components: ['tamagui'],
    //     config: './tamagui.config.ts',
    //     logTimings: true,
    //   },
    // ],
    // 'react-native-reanimated/plugin',
  ];

  const plugins =
    process.env.NODE_ENV === 'production'
      ? [...sharedPlugins, 'transform-remove-console']
      : sharedPlugins;

  return {
    presets: [
      ['babel-preset-expo', { jsxRuntime: 'automatic', platform: 'ios' }],
    ],
    plugins,
  };
};
