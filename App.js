import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Modal, TextInput } from 'react-native';
import {createStaticNavigation, useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';

export default function App() {
  return <Navigation/>;
}

function start(){
const navigation = useNavigation()

  return (
    <View>
      <Text>{getData}</Text>  
    </View>,

    <View style={styles.addDoubt}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Doubt')}>
        <Text style={styles.buttonText}>+</Text>
        {/* <Link screen="Doubt">Add doubt</Link> */}
      </TouchableOpacity>
    </View>
  );
}

function doubt(){
  const inputDoubt = React.useState('')

  return(
    <View>
        <Text>Add your doubt here:</Text>
        <TextInput></TextInput>
        <Button
          title = "Commit doubt"
          onChangeText={inputDoubt}
          onPress={saveInfo}
        />
    </View>,
    <View>
      <Text>{}</Text>
    </View>
  )
}

//Saving the data
const storeData = async (input) => {
  try{
    await AsyncStorage.setItem('my-key', input);
    Alert('Saved!');
  } catch(e){
    console.warn(e);
  }
};

//Function to press the button and then pass the data to storeData
const saveInfo = async (input) =>{
  if (input != null){
    await this.storeData(this.input);
  } else {
    Alert("Try Again");
  }
}

const getData = async () => {
  try{
    
    const value = await AsyncStorage.getItem('my-key');
    if (value != null){

    }
  } catch(e){

  }
}

const rootStack = createNativeStackNavigator({
  initialRouteName: 'Start',
  screens: {
    Start: start,
    Doubt: doubt,
  },
});

const Navigation = createStaticNavigation(rootStack)

const styles = StyleSheet.create({

  addDoubt:{
    position: 'absolute',
    bottom: 100,         // Distance from the bottom of the screen
    left: 0,
    right: 0,
    alignItems: 'center', // Centers the content horizontally
    justifyContent: 'center',
  },

  button:{
    borderWidth: 10,
    borderColor: "yellow",
    // width: 120
  },

  buttonText:{
    fontSize: 120,
    alignItems: 'center', // Centers the content horizontally
    justifyContent: 'center',
  },
});
