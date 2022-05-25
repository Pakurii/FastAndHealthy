/**
 * @format
 */

import {AppRegistry} from 'react-native';

// import Router from './src/Router';
import App from "./src/Pages/ChatScreen"
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
