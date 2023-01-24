// import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';


// const AP =  createStackNavigator(
//   {
//     Welcome :{screen:App},
//     DashBoard :{screen:Dboard},
//     ForgetPassword :{screen:Fpass},
//     Calendar :{screen:Calendar},
//     Invitations :{screen:ODList}
//   }
// );

// export default createAppContainer(AP);

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cacard from './components/cacard';
import Dboard from './components/dashboard';
import Remcard from './components/remcard';
import App from './components/Login';
import Calendar from './components/EventCalendar';
import ODList from './components/odlist';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={App} options={{title: 'Welcome'}}/>
        <Stack.Screen name="DashBoard" component={Dboard} />
        <Stack.Screen name="Calendar" component={Calendar} />
        <Stack.Screen name="On-duty Request" component={ODList}/>
        

      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;
