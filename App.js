import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import HeaderlessScreen from './screens/HeaderlessScreen';

const Stack = createNativeStackNavigator();

function App () {

  return (
    <NavigationContainer>
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
  )}

export default App;
