import { StatusBar } from 'expo-status-bar';
import { Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [newGoal, setNewGoal] = useState("")
  function textChangeHandler(enteredtext) {
    setNewGoal(enteredtext)
    console.log(newGoal)
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputcontainer}>
        <TextInput placeholder='El Goals' style={styles.textInput} onChangeText={textChangeHandler} />
        <Button title='Añadir Goal' color={'#76d'} />
      </View>
      <StatusBar style="auto" />
      <View style={styles.goalcontainer}>
        <Text>Lista de metas: </Text>

      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 15,

  },

  inputcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccc',
    alignItems: 'center',
  },
  textInput: {
    borderColor: 'red',
    borderWidth: 1,
    width: '70%',
    padding: 10,
  },
  goalcontainer: {
    flex: 5,
  }

});
