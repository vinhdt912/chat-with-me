import messaging from '@react-native-firebase/messaging';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import HomeBottomTabScreen from './src/screens/HomeBottomTabScreen/HomeBottomTabScreen';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import RegistrationScreen from './src/screens/RegistrationScreen/RegistrationScreen';
import store from './src/store';

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      // console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
    return unsubscribe;
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Home" options={{headerShown: false}}>
            {props => <HomeBottomTabScreen {...props} />}
          </Stack.Screen>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Registration"
            component={RegistrationScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
