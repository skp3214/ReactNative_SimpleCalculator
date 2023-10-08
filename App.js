import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState(0);

  const handlePlus = () => {
    const parsedValue = parseFloat(inputValue);
    if (!isNaN(parsedValue)) {
      setResult(result + parsedValue);
      setInputValue(''); // Clear the input
    }
  };
  const handleMinus = () => {
    const parsedValue = parseFloat(inputValue);
    if (!isNaN(parsedValue)) {
      setResult(result - parsedValue);
      setInputValue(''); // Clear the input
    }
  };
  const handleMultiply = () => {
    const parsedValue = parseFloat(inputValue);
    if (!isNaN(parsedValue)) {
      setResult(result * parsedValue);
      setInputValue(''); // Clear the input
    }
  };
  const handleDivide = () => {
    const parsedValue = parseFloat(inputValue);
    if (!isNaN(parsedValue)) {
      setResult(result / parsedValue);
      setInputValue(''); // Clear the input
    }
  };



  function resetInput() {
    setInputValue(''); // Clear the input

  }

  function resetResult() {
    setResult(0);
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Simplest Working{"\n       "}Calculator</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setInputValue(text)}
          value={inputValue}
          keyboardType="numeric"
          placeholder='Enter the number'
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handlePlus}
        >
          <Text style={styles.text}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={handleMinus}
        >
          <Text style={styles.text}>Subtract</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={handleMultiply}
        >
          <Text style={styles.text}>Multiply</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={handleDivide}
        >
          <Text style={styles.text}>Divide</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.primaryButton]}
          onPress={resetInput}
        >
          <Text style={styles.text}>Reset Input</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.primaryButton]}
          onPress={resetResult}
        >
          <Text style={styles.text}>Reset Result</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.resultText}>Result: {result}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    // display: 'flex',
    flex: 0.7,
    width: '80%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'whitesmoke',
    borderRadius: 15,
    padding: '5%',
    backgroundColor: 'bisque',
  },
  header: {
    color: 'aliceblue',
    fontSize: 33,
    marginBottom:40,
    fontWeight:'500'
  },
  resultText: {
    borderWidth: 2,
    marginTop: 50,
    borderColor: 'whitesmoke',
    fontSize: 30,
    color: 'aliceblue',
    borderRadius: 15,
    padding: '2%',
    width: '70%',
  },
  input: {
    fontSize: 20,
    padding: 10,
    borderRadius: 5,
    // display: 'block',
    marginBottom: 20,
    borderWidth: 0, // No border
    // outline: 'none',
    backgroundColor: 'whitesmoke',
    width: '95%',
  },
  button: {
    
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'whitesmoke',
    width: '95%',
    marginBottom: 10,
    borderWidth: 0, // No border

  },
  primaryButton: {
    backgroundColor: 'tomato',
    color: 'white',
  },
  buttonHover: {
    width: '100%',
  },
  text: {
    textAlign: 'center',
    fontSize:22
  }
});

// export default styles;

