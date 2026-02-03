import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Modal, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.addDoubt}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>

    
  );
}

function doubt(){
  return(
    <View>
      <Modal isVisible={false}>
        <Text>Add your doubt here:</Text>
        <TextInput></TextInput>
        <Button/>
      </Modal>
    </View>
  )
}

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
