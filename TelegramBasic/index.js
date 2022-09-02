/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Router from './src/pages/MessageListPage';

AppRegistry.registerComponent(appName, () => Router);
