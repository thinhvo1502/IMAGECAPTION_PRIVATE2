import{createNativeStackNavigator} from '@react-navigation/native-stack'
import {} from 'react-native-gesture-handler'
import{NavigationContainer} from '@react-navigation/native'
import {AppRegistry} from 'react-native';
import React from 'react';
// import {name as appName} from './app.json';
import Welcome from './screens/Welcome';
import Setting from './screens/Setting'
import CaptionGenerator from './screens/CaptionGenerator';
const Stack = createNativeStackNavigator();
function App(){
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions = {{headerShown: false}}>
                <Stack.Screen  name = 'WelCome' component={Welcome}></Stack.Screen>
                <Stack.Screen name ='Setting' component={Setting}></Stack.Screen>
                    <Stack.Screen name = 'CaptionGenerator' component={CaptionGenerator}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default App