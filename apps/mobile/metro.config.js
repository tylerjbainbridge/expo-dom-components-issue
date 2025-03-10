// Learn more https://docs.expo.io/guides/customizing-metro
/**
 * @type {import('expo/metro-config')}
 */
const path = require('path');
const { getDefaultConfig } = require('@expo/metro-config');
const exclusionList = require('metro-config/src/defaults/exclusionList');

const projectRoot = __dirname;
const workspaceRoot = path.resolve(__dirname, '../..');

const config = getDefaultConfig(__dirname);

console.log('__dirname', __dirname);

const { assetExts } = config.resolver;

config.watchFolders = [projectRoot, workspaceRoot];

config.resolver.assetExts = [...assetExts, 'ttf', 'otf'];

config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
];

config.transformer.minifierConfig = {
  compress: {
    // The option below removes all console logs statements in production.
    drop_console: true,
  },
};

config.resolver.disableHierarchicalLookup = true;

config.resolver.unstable_enableSymlinks = true;
// config.resolver.unstable_enablePackageExports = true;

config.resolver.sourceExts.push('js');
config.resolver.sourceExts.push('mjs');
config.resolver.sourceExts.push('tsx');
config.resolver.sourceExts.push('svg');
config.resolver.assetExts = assetExts.filter((ext) => ext !== 'svg');

// config.resolver.extraNodeModules = {
//   stream: require.resolve('readable-stream'),
//   'node:stream': require.resolve('readable-stream'),
//   tamagui: path.resolve(workspaceRoot, 'node_modules/tamagui'),
// };

config.resolver.blockList = exclusionList([/@prisma/, /prisma/, /pg/]);

config.resolver.unstable_conditionNames = ['require', 'default'];

// Allow for custom minifier logic, debugging with app build crashes
if (process.env.METRO_MINIFY_CONFIG) {
  config.transformer.minifierConfig = JSON.parse(
    process.env.METRO_MINIFY_CONFIG
  );
}

if (process.env.METRO_TRANSFORM_CACHE_SIZE) {
  config.transformer.transformCache = {
    maxSize: parseInt(process.env.METRO_TRANSFORM_CACHE_SIZE),
  };
}

config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (moduleName.includes('@chakra')) {
    return {
      filePath: path.resolve(__dirname, './stubs/chakra-context.ts'),
      type: 'sourceFile',
    };
  }
  if (moduleName.startsWith('.prisma/client/index-browser')) {
    // Logic to resolve the module name to a file path...
    // NOTE: Throw an error if there is no resolution.
    return {
      filePath: path.resolve(
        __dirname,
        './node_modules/shared/node_modules/@prisma/.ignored_client/index-browser.js'
      ),
      type: 'sourceFile',
    };
  }
  if (moduleName.includes('database')) {
    // Logic to resolve the module name to a file path...
    // NOTE: Throw an error if there is no resolution.
    return {
      filePath: path.resolve(__dirname, './shim.js'),
      type: 'sourceFile',
    };
  }
  if (moduleName.includes('react-server-dom-webpack')) {
    // Logic to resolve the module name to a file path...
    // NOTE: Throw an error if there is no resolution.
    return {
      filePath: path.resolve(__dirname, './shim.js'),
      type: 'sourceFile',
    };
  }
  // Optionally, chain to the standard Metro resolver.
  return context.resolveRequest(context, moduleName, platform);
};

// config.transformer = { ...config.transformer, unstable_allowRequireContext: true };
// config.transformer.minifierPath = require.resolve('metro-minify-terser');

module.exports = config;
