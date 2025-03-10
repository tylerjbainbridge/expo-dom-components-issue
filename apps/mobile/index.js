import 'react-native-reanimated';
// import { enableScreens } from 'react-native-screens';

// if (__DEV__) {
//   const ignoreLogTextList = [
//     'Warning: ...',
//     'Warning: Failed prop type',
//     'Warning: Cannot update a component',
//   ];

//   const withoutIgnored =
//     (logger) =>
//     (...args) => {
//       const output = args.join(' ');
//       if (!ignoreLogTextList.some((log) => output.includes(log))) {
//         logger(...args);
//       }
//     };

//   console.log = withoutIgnored(console.log);
//   console.info = withoutIgnored(console.info);
//   console.warn = withoutIgnored(console.warn);
//   console.error = withoutIgnored(console.error);
// }

// enableScreens();

// if (typeof navigator === 'undefined' || !navigator.userAgent) {
//   global.navigator = global.navigator || {};
//   navigator.userAgent = 'React Native';
// }

// if (!__DEV__ || process.env['NODE_ENV'] === 'production') {
//   console.log = () => {};
// }

import 'expo-router/entry';
