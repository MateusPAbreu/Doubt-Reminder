import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Modal, TextInput } from 'react-native';
import { createStaticNavigation, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';

export default function App() {
  return <Navigation />;
}

let a = "Test"

function start() {
  const navigation = useNavigation()

  return (


//nothing above this shows up because it is absolute, fix that later
    <View style={styles.addDoubt}> 
      <Text>{getData}</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Doubt')}>
        <Text style={styles.buttonText}>+</Text>
        {/* <Link screen="Doubt">Add doubt</Link> */}
      </TouchableOpacity>
    </View>
  );
}

function doubt() {
  const [doubt, setDoubt] = React.useState('') //should I make this global?
  const inputDoubt = (input) =>{
    setDoubt(input)
  }

  return (
    <View>
      <Text>Add your doubt here:</Text>
      <TextInput  onChangeText={setDoubt}></TextInput>
      <Button
        title="Commit doubt"
        onPress={() => storeData({doubt})}//the button will take the state and save it to the first page
      />
      {/* <Text>{doubt}</Text> */}
    </View>
  )
}

// function userDoubt({ title, children }) {
//   // const [doubt, doubtRem] = 
//   <section>
//     <h3>{title}</h3>
//     <Text>{children}</Text>
//   </section>
// }

//Saving the data
const storeData = async (input) => {
  try {
    await AsyncStorage.setItem('my-key', input);
    Alert('Saved!');
  } catch (e) {
    console.warn(e);
  }
};

//Function to press the button and then pass the data to storeData
const saveInfo = async (input) => {
  if (input != null) {
    await this.storeData(this.input);
  } else {
    Alert("Try Again");
  }
}

const getData = async () => {
  try {

    const value = await AsyncStorage.getItem('my-key');
    if (value != null) {
      a = value;//I think I can get the idea, to put something, some constant/function here to save the value that will be called above
    }
  } catch (e) {
    console.warn(e);
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

  addDoubt: {
    position: 'absolute',
    bottom: 100,         // Distance from the bottom of the screen
    left: 0,
    right: 0,
    alignItems: 'center', // Centers the content horizontally
    justifyContent: 'center',
  },

  button: {
    borderWidth: 10,
    borderColor: "yellow",
    // width: 120
  },

  buttonText: {
    fontSize: 120,
    alignItems: 'center', // Centers the content horizontally
    justifyContent: 'center',
  },
});
