/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import login from './src/loginpage'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => login);
