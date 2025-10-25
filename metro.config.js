// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Configure Metro to look for the app directory in src/app
config.resolver.sourceExts = [...config.resolver.sourceExts];
config.watchFolders = [__dirname];

module.exports = config;
