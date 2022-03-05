import React from 'react';
import { View, Text, Button, TouchableOpacity, DrawerLayoutAndroid } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
// import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import HeaderlessScreen from './screens/HeaderlessScreen';

import './App.css';

// const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

// function HomeScreen({navigation}) {
//   return(
//     <View>
//       <Text>Home</Text>
//       <Button title="Drawer 열기" onPress={()=>navigation.openDrawer()} />
//       <Button
//         title="Setting 열기"
//         onPress={()=>navigation.navigate('Setting')}
//       />
//     </View>
//   );
// }

// function SettingScreen({navigation}) {
//   return(
//     <View>
//       <Text>Setting</Text>
//       <Button title="뒤로가기" onPress={()=>navigation.goBack()} />
//     </View>
//   );
// }

function App () {

  return (
    <NavigationContainer>
      {/* <Drawer.Navigator
        initialRouteName="Home"
        drawerPosition="left"
        backBehavior="history"
      >
        <Drawer.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{title:'홈'}}
        />
        <Drawer.Screen 
          name="Setting" 
          component={SettingScreen}
          options={{title:'설정'}}
        />
      </Drawer.Navigator> */}

      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            title:'홈',
            // Header 블록에 대한 스타일
            headerStyle: {
              backgroundColor: '#29b6f6',
            },
            // Header의 텍스트, 버튼들 색상
            headerTintColor: '#29b6f6,',
            // 타이틀 텍스트의 스타일
            headerTitleStyle: {
              fontWeight: 'bold',
              fontsize: 20,
            },
          }} 
        />
        <Stack.Screen 
          name="Detail" 
          component={DetailScreen} 
          options={{
            headerBackVisible: false,    //안드로이드 뒤로가기 버튼 숨기기
            headerLeft: ({onPress})=>(
              <TouchableOpacity onPress={onPress}>
                <Text>Left</Text>
              </TouchableOpacity>
            ),
            headerTitle: ({children})=>(
              <View>
                <Text>{children}</Text>
              </View>
            ),
            headerRight: ()=>(
              <View>
                <Text>Right</Text>
              </View>
            ),
          }}
        />
        <Stack.Screen 
          name="Headerless" 
          component={HeaderlessScreen} 
          options={{
            headerShown: false, 
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
