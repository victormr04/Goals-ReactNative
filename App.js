import { StatusBar } from 'expo-status-bar';
import { Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputcontainer}>
        <TextInput placeholder='El Goals' style={styles.textInput}></TextInput>
        <Button title='Añadir Meta' color={'#76d'} />
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
