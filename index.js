/** @format */

// Uint8Array replacement for Android
import './polyfills';

// Node-specific polyfill
import 'node-libs-react-native/globals';

import { AppRegistry, Platform } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
