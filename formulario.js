import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  TextInput,
  DevSettings,
} from "react-native";
import moment from "moment";
import { Input, Button, ListItem, Text } from "react-native-elements";

  const Formulario = () => {
    const [precioHora, setPrecioHora] = useState();
    const [horaTrabajadas, setHoraTrabajadas] = useState({
    L1: "00:00",
    L2: "00:00",
    M1: "00:00",
    M2: "00:00",
    I1: "00:00",
    I2: "00:00",
    J1: "00:00",
    J2: "00:00",
    V1: "00:00",
    V2: "00:00",
    L3: "00:00",
    L4: "00:00",
    M3: "00:00",
    M4: "00:00",
    I3: "00:00",
    I4: "00:00",
    J3: "00:00",
    J4: "00:00",
    V3: "00:00",
    V4: "00:00",
  });
    var MONTO = (
    ((moment(horaTrabajadas.L2, "HH:mm")) - (moment(horaTrabajadas.L1, "HH:mm"))) +
    ((moment(horaTrabajadas.L4, "HH:mm")) - (moment(horaTrabajadas.L3, "HH:mm"))) +
    ((moment(horaTrabajadas.M2, "HH:mm")) - (moment(horaTrabajadas.M1, "HH:mm"))) +
    ((moment(horaTrabajadas.M4, "HH:mm")) - (moment(horaTrabajadas.M3, "HH:mm"))) +
    ((moment(horaTrabajadas.I2, "HH:mm")) - (moment(horaTrabajadas.I1, "HH:mm"))) +
    ((moment(horaTrabajadas.I4, "HH:mm")) - (moment(horaTrabajadas.I3, "HH:mm"))) +
    ((moment(horaTrabajadas.J2, "HH:mm")) - (moment(horaTrabajadas.J1, "HH:mm"))) +
    ((moment(horaTrabajadas.V2, "HH:mm")) - (moment(horaTrabajadas.V1, "HH:mm"))) +
    ((moment(horaTrabajadas.J4, "HH:mm")) - (moment(horaTrabajadas.J3, "HH:mm"))) +
    ((moment(horaTrabajadas.V4, "HH:mm")) - (moment(horaTrabajadas.V3, "HH:mm")))
      )
      /1000/60*precioHora/60;
    const handleInputChange = (name, text)=> {
    setHoraTrabajadas({
      ...horaTrabajadas,
      [name]:text,
    });
    };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.titulo}>Calculo total de horas con precio</Text>
        <SafeAreaView style={styles.diasyhorarios}>
          <Text style={styles.textdias}> Precio de la hora</Text>
          <TextInput
            style={styles.input2}
            className="form-control "
            type="text"
            name="precioHora"
//   value="text"
            onChangeText={text => setPrecioHora(text)}
          ></TextInput>
        </SafeAreaView>
        <SafeAreaView style={styles.diasyhorarios}>
          <Text style={styles.textdias}> Lunes a la mañana </Text>
          <TextInput
            style={styles.input}
            className="form-control "
            defaultValue="00:00"
            type="text"
            name="L1"
            
            // value='value'
            onChangeText={text => {handleInputChange('L1', text)}}
            //     inputContainerStyle={{
            //    marginRight:280
            //  }}
          ></TextInput>

          <TextInput
            style={styles.input}
            className="form-control "
            defaultValue="00:00"
            type="text"
            name="L2"
            onChangeText={text => {handleInputChange('L2', text)}}
            // bcaretHidden="True"
            // inputContainerStyle={{
            //   marginRight:280 }}
          ></TextInput>
        </SafeAreaView>
        <SafeAreaView style={styles.diasyhorarios}>
          <Text style={styles.textdias}> Lunes a la tarde</Text>

          <TextInput
            style={styles.input}
            className="form-control "
            defaultValue="00:00"
            type="text"
            name="L3"
            onChangeText={text => {handleInputChange('L3', text)}}
          ></TextInput>

          <TextInput
            style={styles.input}
            className="form-control "
            defaultValue="00:00"
            type="text"
            name="L4"
            onChangeText={text => {handleInputChange('L4', text)}}
          ></TextInput>
        </SafeAreaView>
        <SafeAreaView style={styles.diasyhorarios}>
          <Text style={styles.textdias}> Martes a la mañana </Text>

          <TextInput
            style={styles.input}
            className="form-control "
            defaultValue="00:00"
            type="text"
            name="M1"
            onChangeText={text => {handleInputChange('M1', text)}}
          ></TextInput>

          <TextInput
            style={styles.input}
            className="form-control "
            defaultValue="00:00"
            type="text"
            name="M2"
            onChangeText={text => {handleInputChange('M2', text)}}
          ></TextInput>
        </SafeAreaView>
        <SafeAreaView style={styles.diasyhorarios}>
          <Text style={styles.textdias}> Martes a la tarde </Text>

          <TextInput
            style={styles.input}
            className="form-control "
            defaultValue="00:00"
            type="text"
            name="M3"
            onChangeText={text => {handleInputChange('M3', text)}}
          ></TextInput>

          <TextInput
            style={styles.input}
            className="form-control "
            defaultValue="00:00"
            type="text"
            name="M4"
            onChangeText={text => {handleInputChange('M4', text)}}
          ></TextInput>
        </SafeAreaView>
        <SafeAreaView style={styles.diasyhorarios}>
          <Text style={styles.textdias}> Miércoles a la mañana</Text>

          <TextInput
            style={styles.input}
            className="form-control "
            defaultValue="00:00"
            type="text"
            name="I1"
            onChangeText={text => {handleInputChange('I1', text)}}
          ></TextInput>

          <TextInput
            style={styles.input}
            className="form-control "
            defaultValue="00:00"
            type="text"
            name="I2"
            onChangeText={text => {handleInputChange('I2', text)}}
          ></TextInput>
        </SafeAreaView>
        <SafeAreaView style={styles.diasyhorarios}>
          <Text style={styles.textdias}> Miércoles a la tarde </Text>

          <TextInput
            style={styles.input}
            className="form-control "
            defaultValue="00:00"
            type="text"
            name="I3"
            onChangeText={text => {handleInputChange('I3', text)}}
          ></TextInput>

          <TextInput
            style={styles.input}
            className="form-control "
            defaultValue="00:00"
            type="text"
            name="I4"
            onChangeText={text => {handleInputChange('I4', text)}}
          ></TextInput>
        </SafeAreaView>
        <SafeAreaView style={styles.diasyhorarios}>
          <Text style={styles.textdias}> Jueves a la mañana </Text>

          <TextInput
            style={styles.input}
            className="form-control "
            defaultValue="00:00"
            type="text"
            name="J1"
            onChangeText={text => {handleInputChange('J1', text)}}
          ></TextInput>

          <TextInput
            style={styles.input}
            className="form-control "
            defaultValue="00:00"
            type="text"
            name="J2"
            onChangeText={text => {handleInputChange('J2', text)}}
          ></TextInput>
        </SafeAreaView>
        <SafeAreaView style={styles.diasyhorarios}>
          <Text style={styles.textdias}> Jueves a la tarde</Text>

          <TextInput
            style={styles.input}
            className="form-control "
            defaultValue="00:00"
            type="text"
            name="J3"
            onChangeText={text => {handleInputChange('J3', text)}}
          ></TextInput>

          <TextInput
            style={styles.input}
            className="form-control "
            defaultValue="00:00"
            type="text"
            name="J4"
            onChangeText={text => {handleInputChange('J4', text)}}
          ></TextInput>
        </SafeAreaView>
        <SafeAreaView style={styles.diasyhorarios}>
          <Text style={styles.textdias}> Viernes a la mañana </Text>

          <TextInput
            style={styles.input}
            className="form-control "
            defaultValue="00:00"
            type="text"
            name="V1"
            onChangeText={text => {handleInputChange('V1', text)}}
          ></TextInput>

          <TextInput
            style={styles.input}
            className="form-control "
            defaultValue="00:00"
            type="text"
            name="V2"
            onChangeText={text => {handleInputChange('V2', text)}}
          ></TextInput>
        </SafeAreaView>
        <SafeAreaView style={styles.diasyhorarios}>
          <Text style={styles.textdias}> Viernes a la tarde </Text>

          <TextInput
            style={styles.input}
            className="form-control "
            defaultValue="00:00"
            type="text"
            name="V3"
            onChangeText={text => {handleInputChange('V3', text)}}
          ></TextInput>

          <TextInput
            style={styles.input}
            className="form-control "
            defaultValue="00:00"
            type="text"
            name="V4"
            onChangeText={text => {handleInputChange('V4', text)}}
          ></TextInput>
        </SafeAreaView>
        
        <Text style={styles.textdias}>
             El valor total a pagar es {MONTO}
        </Text>

        <Button 
        title="Reiniciar"
        onPress={()=> DevSettings.reload()} />
      </View>
     
      {/* <StatusBar style="auto" /> */}
    </ScrollView>
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
    
  export default Formulario;