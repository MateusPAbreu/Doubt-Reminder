import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Modal, TextInput } from 'react-native';
import {createStaticNavigation, useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  return <Navigation/>;
}

function start(){
const navigation = useNavigation()

  return (
    <View style={styles.addDoubt}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Doubt')}>
        <Text style={styles.buttonText}>+</Text>
        {/* <Link screen="Doubt">Add doubt</Link> */}
      </TouchableOpacity>
    </View>
  );
}

function doubt(){
  return(
    <View>
        <Text>Add your doubt here:</Text>
        <TextInput></TextInput>
        {/* <Button></Button> */}
     
    </View>
  )
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
