import React from 'react'
import MyTabs from './src/components/MyTabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Screens/Home';
import Profile from './src/Screens/Profile';
import Newsfeed from './src/Screens/Newsfeed';
import Reels from './src/Screens/Reels';
import AddPost from './src/Screens/AddPost';
const Tab=createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
   <Tab.Navigator tabBar={props => <MyTabs {...props} />}>
      <Tab.Screen name="Home" component={Home} options={{headerShown:false}}/>
      <Tab.Screen name="Search" component={Newsfeed} />
      <Tab.Screen name="Post" component={AddPost} />
      <Tab.Screen name="Reels" component={Reels} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App