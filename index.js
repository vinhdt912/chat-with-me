/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import firebase from '@react-native-firebase/app';

console.disableYellowBox = true;

const firebaseConfig = {
  apiKey: 'AIzaSyAgPeqXIu4IA7V9txycRKggcK0KoiMgKB8',
  authDomain: 'chat-app-f00c6.firebaseapp.com',
  databaseURL: 'https://chat-app-f00c6.firebaseio.com',
  projectId: 'chat-app-f00c6',
  storageBucket: 'chat-app-f00c6.appspot.com',
  messagingSenderId: '80447301594',
  appId: '1:80447301594:web:455dcb513e58646b9d82e3',
  measurementId: 'G-F6M2MMMP11',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

AppRegistry.registerComponent(appName, () => App);
