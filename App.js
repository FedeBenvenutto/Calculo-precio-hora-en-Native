// import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  TextInput,
} from "react-native";
import moment from "moment";
import { Input, Button, ListItem, Text } from "react-native-elements";
import Formulario from "./formulario";
import Formulario2 from "./formulario2";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from "@react-navigation/native";

export default function App({navigation}) {
  // const [estado, setEstado] = useState();
  const Stack= createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name='F1'
        component={Formulario} 
        options={{
          headerShown:false,
          }}
        />
        <Stack.Screen
        name='F2'
        component={Formulario2} 
        options={{
          headerShown:false,
          }}
        />
        
          
      </Stack.Navigator>

    </NavigationContainer>
    // <View className= "container mt-5">

    //  {/* {estado===true ? <Formulario /> : <Formulario />} */}
        // </View>
  );
}


const styles = StyleSheet.create({
  titulo: {
    alignItems: "center",
    fontSize: 45,
    justifyContent: "center",
    textAlign: "center",
    color: "blue",
    marginBottom: 50,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 80,
  },
  diasyhorarios: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
  },
  input: {
    height: 50,
    margin: 5,
    borderWidth: 1,
    padding: 10,
    minWidth: 50,
    maxWidth: 90,
    fontSize: 20,
  },
  textdias: {
    fontSize: 20,
  },
  input2: {
    height: 50,
    margin: 5,
    borderWidth: 1,
    padding: 10,
    minWidth: 170,
    maxWidth: 1000,
    fontSize: 20,
  },
});
