import React,{useState} from 'react';
import { StyleSheet, Text, View,Button, ScrollView} from 'react-native';

export default function App() {
  const [counter,setCounter] = useState(0)
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>{counter}</Text>
      <Button title="counter" onPress={()=>{setCounter(counter+1)}}></Button>
      <ScrollView>
        <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Open up App.js to start working on your app!</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
