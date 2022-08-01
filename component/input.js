import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = ({ nombre, horaTrabajadas, handleHoraChange, Errores }) => {
  return (
    <TextInput
        style={Errores ? styles.inputerror : styles.input}
        value={horaTrabajadas === "00:00" ? "" : horaTrabajadas}
        type="text"
        name={nombre}
        maxLength={5}
        placeholder="00:00"
        onChangeText={text => {handleHoraChange(nombre, text)}} 
      ></TextInput>
  )
}

const styles = StyleSheet.create({
    input: {
      height: 50,
      margin: 5,
      borderWidth: 1,
      padding: 10,
      minWidth: 50,
      maxWidth: 90,
      fontSize: 20,
      },
    inputerror: {
      height: 50,
      margin: 5,
      borderWidth: 1,
      padding: 10,
      minWidth: 50,
      maxWidth: 90,
      fontSize: 20,
      borderColor: 'red',
      color: "red",
    },
  });

export default Input